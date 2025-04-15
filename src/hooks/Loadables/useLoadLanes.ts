import { useCallback, useEffect } from 'react'
import { Address } from 'viem'
import { useQuery } from '@tanstack/react-query'
import { useChainsStore } from '@/stores/chains/useChainsStore'
import { useFormStore } from '@/stores/form/useFormStore'
import { useLanesStore } from '@/stores/lanes/useLanesStore'
import { getPublicClient } from '@/utils/client'
import { CCIPRouter } from '@/assets/abi/CCIPRouter'
import { ccipRouters } from '@/configuration/ccip'

export const useLoadLanes = () => {
	const { chains } = useChainsStore()
	const { sourceChain } = useFormStore()
	const { setLane, resetLanes } = useLanesStore()

	const fetchSrcChainLanes = useCallback(async () => {
		if (!sourceChain?.id || !sourceChain.isCCIP) {
			return {}
		}

		const sourceId = sourceChain.id
		const client = getPublicClient(Number(sourceId))
		const routerAddress = ccipRouters[sourceId]

		if (!client || !routerAddress) {
			return {}
		}

		const destChains = Object.values(chains).filter(
			chain => chain.id !== sourceId && chain.isCCIP && chain.selector,
		)

		resetLanes()

		const lanePromises = destChains.map(async destChain => {
			if (!destChain.isCCIP || !destChain.selector) {
				setLane(destChain.id, false)
				return { chainId: destChain.id, supported: false }
			}

			try {
				const supported = await client.readContract({
					address: routerAddress as Address,
					abi: CCIPRouter,
					functionName: 'isChainSupported',
					args: [destChain.selector],
				})

				const isSupported = !!supported
				setLane(destChain.id, isSupported)

				return { chainId: destChain.id, supported: isSupported }
			} catch (error) {
				console.error(`Error checking lane ${sourceChain.name} → ${destChain.name}:`, error)
				setLane(destChain.id, false)
				return { chainId: destChain.id, supported: false }
			}
		})

		const results = await Promise.all(lanePromises)

		const lanesMap = results.reduce(
			(acc, { chainId, supported }) => {
				acc[chainId] = supported
				return acc
			},
			{} as Record<string, boolean>,
		)

		return lanesMap
	}, [sourceChain, chains, setLane, resetLanes])

	const {
		data: lanes,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ['ccip-lanes', sourceChain?.id],
		queryFn: fetchSrcChainLanes,
		enabled: !!sourceChain?.id && !!sourceChain?.isCCIP,
		staleTime: 60 * 60 * 1000,
		gcTime: 24 * 60 * 60 * 1000,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
	})

	useEffect(() => {
		if (sourceChain?.id && sourceChain.isCCIP) {
			refetch()
		}
	}, [sourceChain?.id, refetch])

	useEffect(() => {
		if (sourceChain && !sourceChain.isCCIP) {
			resetLanes()
		}
	}, [sourceChain, resetLanes])

	return {
		isLoading,
		error,
		refetch,
		lanes,
	}
}
