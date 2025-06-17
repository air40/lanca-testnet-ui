import { useState, useCallback } from 'react'
import { Address } from 'viem'
import { useAccount } from 'wagmi'
import { useLoadBalances } from './Loadables/useLoadBalances'
import { TokenEvents } from '@/events/events'
import { useTrackEvent } from './useTrackEvent'
import { chainNames } from '@/stores/chains/ChainInfo'

type FaucetResponse = {
	success: boolean
	message?: string
	txHash?: string
}
const requestTokens = async (address: Address, chainId: number): Promise<FaucetResponse> => {
	try {
		const res = await fetch(`https://api.concero.io/api/faucet`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				address,
				chainId,
			}),
		})

		if (!res.ok) {
			const errorData = await res.json()
			return {
				success: false,
				message: errorData.message || `Error: ${res.status} ${res.statusText}`,
			}
		}

		const data = await res.json()
		return {
			success: true,
			...data,
		}
	} catch (error) {
		return {
			success: false,
			message: error instanceof Error ? error.message : 'Unknown error occurred',
		}
	}
}

export const useFaucet = () => {
	const { address } = useAccount()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [txHash, setTxHash] = useState<string | null>(null)
	const [error, setError] = useState<string | null>(null)
	const { refetchChains } = useLoadBalances()

	const { trackEvent } = useTrackEvent()

	const getTestTokens = useCallback(
		async (chainId: number) => {
			if (!address) return false

			setIsLoading(true)
			setError(null)
			let success = false

			try {
				const response = await requestTokens(address, chainId)

				if (!response.success) {
					setError('Error, please try again')
					trackEvent({
						...TokenEvents.CLAIM_FAILED,
						data: {
							chainId: chainId.toString(),
							chainName: chainNames[chainId],
							error: response.message || 'Unknown error',
						},
					})
					return false
				}

				if (response.txHash) {
					setTxHash(response.txHash)
				}

				success = true
				trackEvent({
					...TokenEvents.CLAIM_SUCCESSFUL,
					data: {
						chainId: chainId.toString(),
						chainName: chainNames[chainId],
						txHash: response.txHash,
					},
				})
				await refetchChains([chainId])
				return true
			} catch (err) {
				setError('Error, please try again')
				return false
			} finally {
				setIsLoading(false)
			}
		},
		[address, refetchChains],
	)

	return {
		getTestTokens,
		isLoading,
		txHash,
		error,
	}
}
