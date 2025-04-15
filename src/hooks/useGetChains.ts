import { useChainsStore } from '@/stores/chains/useChainsStore'
import { useLanesStore } from '@/stores/lanes/useLanesStore'
import { useFormStore } from '@/stores/form/useFormStore'
import { useEffect, useState, useMemo } from 'react'

export const useGetChains = () => {
	const { chains } = useChainsStore()
	const { lanes } = useLanesStore()
	const { sourceChain } = useFormStore()

	const [isLoading, setIsLoading] = useState(true)

	const { allChains, ccipChains, faucetChains } = useMemo(() => {
		const all = Object.values(chains)
		const faucet = all.filter(chain => chain.hastCEROFaucet)

		if (Object.keys(lanes).length === 0 || !sourceChain?.id || !sourceChain.isCCIP) {
			return {
				allChains: all,
				ccipChains: [],
				faucetChains: faucet,
			}
		}

		const supportedLaneIds = Object.entries(lanes)
			.filter(([_, isSupported]) => isSupported === true)
			.map(([chainId]) => chainId)

		if (supportedLaneIds.length === 0) {
			return {
				allChains: all,
				ccipChains: [],
				faucetChains: faucet,
			}
		}

		const ccip = all.filter(
			chain => chain.isCCIP && supportedLaneIds.includes(chain.id) && chain.id !== sourceChain.id,
		)

		return { allChains: all, ccipChains: ccip, faucetChains: faucet }
	}, [chains, lanes, sourceChain])

	useEffect(() => {
		if (isLoading) {
			const timer = setTimeout(() => setIsLoading(false), 0)
			return () => clearTimeout(timer)
		}
	}, [isLoading])

	useEffect(() => {
		setIsLoading(true)
	}, [chains, lanes, sourceChain])

	return { allChains, ccipChains, faucetChains, isLoading }
}
