import type { Balance } from '@/stores/balances/types'
import { useEffect, useCallback } from 'react'
import { Status } from '@lanca/sdk'
import { useQuery } from '@tanstack/react-query'
import { useBalancesStore } from '@/stores/balances/useBalancesStore'
import { useAccount } from 'wagmi'
import { useChainsStore } from '@/stores/chains/useChainsStore'
import { Address, erc20Abi } from 'viem'
import { getPublicClient } from '@/utils/client'
import { TokenAddresses } from '@/configuration/addresses'
import { useTxExecutionStore } from '@/stores/tx-execution/useTxExecutionStore'
import { useFormStore } from '@/stores/form/useFormStore'

const SYMBOL = 'tCERO'
const DECIMALS = 18
export const useLoadBalances = () => {
	const { address } = useAccount()
	const { chains } = useChainsStore()
	const { setBalances, setLoading, setBalance } = useBalancesStore()
	const { sourceChain, destinationChain } = useFormStore()
	const { txStatus } = useTxExecutionStore()

	const fetchChainBalance = useCallback(
		async (chainId: number) => {
			const client = getPublicClient(chainId)
			const tokenAddress = TokenAddresses[chainId]

			if (!tokenAddress) {
				console.warn(`No token address for chain ${chainId}`)
				return { chainId, balance: '0', symbol: SYMBOL, decimals: DECIMALS }
			}

			try {
				const balance = await client.readContract({
					address: tokenAddress as Address,
					abi: erc20Abi,
					functionName: 'balanceOf',
					args: [address!],
				})
				return { chainId, balance: balance.toString(), symbol: SYMBOL, decimals: DECIMALS }
			} catch (error) {
				console.error(`Chain ${chainId} balance fetch failed:`, error)
				return { chainId, balance: '0', symbol: SYMBOL, decimals: DECIMALS }
			}
		},
		[address],
	)

	const fetchAllBalances = useCallback(async () => {
		if (!address) return []
		return Promise.all(Object.values(chains).map(c => fetchChainBalance(Number(c.id))))
	}, [address, chains, fetchChainBalance])

	const refetchChains = useCallback(
		async (chainIds: number[]) => {
			if (!address) return

			const results = await Promise.all(
				chainIds.map(id =>
					fetchChainBalance(id).catch(error => {
						console.error(`Failed refetch for chain ${id}:`, error)
						return null
					}),
				),
			)

			results.forEach(result => {
				if (result) setBalance(result.chainId, result)
			})
		},
		[address, fetchChainBalance, setBalance],
	)

	const { data, isLoading, refetch } = useQuery({
		queryKey: ['balances', address],
		queryFn: fetchAllBalances,
		enabled: !!address,
	})

	useEffect(() => {
		if (data) {
			const bulkUpdate = data.reduce(
				(acc, curr) => {
					acc[curr.chainId] = curr
					return acc
				},
				{} as Record<number, Balance>,
			)
			setBalances(bulkUpdate)
		}
	}, [data, setBalances])

	useEffect(() => {
		if (txStatus === Status.SUCCESS) refetchChains([Number(sourceChain?.id), Number(destinationChain?.id)])
	}, [txStatus, refetch])

	
	useEffect(() => {
		setLoading(isLoading)
	}, [isLoading, setLoading])

	return { refetch, refetchChains, isLoading }
}
