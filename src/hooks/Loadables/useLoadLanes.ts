import { useCallback, useEffect } from 'react'
import { Address, parseAbi } from 'viem'
import { useQuery } from '@tanstack/react-query'
import { useChainsStore } from '@/stores/chains/useChainsStore'
import { useFormStore } from '@/stores/form/useFormStore'
import { useLanesStore } from '@/stores/lanes/useLanesStore'
import { getPublicClient } from '@/utils/client'
import { ContractAddresses } from '@/configuration/addresses'

export const useLoadLanes = () => {
	const { chains } = useChainsStore()
	const { sourceChain } = useFormStore()
	const { setLane, resetLanes } = useLanesStore()

	const fetchLanes = useCallback(async () => {
		if (!sourceChain?.id || !sourceChain.isCCIP) {
			return {}
		}

		const srcId = sourceChain.id
		const client = getPublicClient(Number(srcId))
		const contract = ContractAddresses[srcId]

		if (!client || !contract) {
			return {}
		}

		resetLanes()

		const selectors: bigint[] = []
		const chainMap: Record<number, string> = {}
		let index = 0

		for (const chain of Object.values(chains)) {
			if (chain.id !== srcId && chain.isCCIP && chain.selector) {
				selectors.push(chain.selector)
				chainMap[index++] = chain.id
			}
		}

		if (selectors.length === 0) {
			return {}
		}

		const abi = parseAbi([
			'function isCcipLanes(uint64[] memory chainSelectors) external view returns (bool[] memory)',
		])

		try {
			const results = await client.readContract({
				address: contract as Address,
				abi,
				functionName: 'isCcipLanes',
				args: [selectors],
			})

			const lanes: Record<string, boolean> = {}

			if (Array.isArray(results)) {
				for (let i = 0; i < results.length; i++) {
					const chainId = chainMap[i]
					if (chainId) {
						const isSupported = Boolean(results[i])
						setLane(chainId, isSupported)
						lanes[chainId] = isSupported
					}
				}
			}

			return lanes
		} catch (error) {
			const lanes: Record<string, boolean> = {}
			for (const chainId of Object.values(chainMap)) {
				setLane(chainId, false)
				lanes[chainId] = false
			}

			return lanes
		}
	}, [sourceChain, chains, setLane, resetLanes])

	const queryEnabled = !!sourceChain?.id && !!sourceChain?.isCCIP

	const {
		data: lanes,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ['ccip-lanes', sourceChain?.id],
		queryFn: fetchLanes,
		enabled: queryEnabled,
		staleTime: 60 * 60 * 1000,
		gcTime: 24 * 60 * 60 * 1000,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		refetchOnMount: false,
	})

	useEffect(() => {
		if (sourceChain) {
			if (sourceChain.isCCIP && sourceChain.id) {
				refetch()
			} else {
				resetLanes()
			}
		}
	}, [sourceChain, refetch, resetLanes])

	return {
		isLoading,
		error,
		refetch,
		lanes,
	}
}
