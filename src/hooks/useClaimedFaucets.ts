import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { Address } from 'viem'

type ClaimedFaucetsResponse = {
	success: boolean
	message: string
	claimedChains?: number[]
}

const fetchClaimedChainsData = async (address: Address): Promise<number[]> => {
	if (!address) return []

	try {
		const response = await fetch(`https://api.concero.io/api/faucet/${address}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		if (!response.ok) {
			throw new Error(`Error: ${response.status}`)
		}

		const data: ClaimedFaucetsResponse = await response.json()
		return data.success && data.claimedChains ? data.claimedChains : []
	} catch (error) {
		console.error('Failed to fetch claimed chains:', error)
		return []
	}
}

export const useClaimedFaucets = () => {
	const { address } = useAccount()

	const {
		data: claimedChains = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['claimedFaucets', address],
		queryFn: () => fetchClaimedChainsData(address as Address),
		enabled: !!address,
	})

	return {
		claimedChains,
		isLoading,
		refetch,
	}
}
