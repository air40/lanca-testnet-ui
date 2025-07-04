import type { NativeBalance } from '@/stores/balances/types'
import { useEffect, useCallback } from 'react'
import { Status } from '@lanca/sdk'
import { useQuery } from '@tanstack/react-query'
import { useBalancesStore } from '@/stores/balances/useBalancesStore'
import { useAccount } from 'wagmi'
import { useChainsStore } from '@/stores/chains/useChainsStore'
import { getPublicClient } from '@/utils/client'
import { useTxExecutionStore } from '@/stores/tx-execution/useTxExecutionStore'
import { useFormStore } from '@/stores/form/useFormStore'

export const useLoadNativeBalances = () => {
	const { address } = useAccount()
	const { chains } = useChainsStore()
	const { setNativeBalances, setLoading, setNativeBalance } = useBalancesStore()
	const { txStatus } = useTxExecutionStore()
	const { sourceChain } = useFormStore()

	const fetchNativeBalance = useCallback(
		async (chainId: number): Promise<NativeBalance> => {
			const client = getPublicClient(chainId)
			const chain = Object.values(chains).find(c => Number(c.id) === chainId)

			if (!chain) {
				return { balance: '0', symbol: '?', decimals: 18 }
			}

			try {
				const balance = await client.getBalance({ address: address! })
				return {
					balance: balance.toString(),
					symbol: chain.nativeToken,
					decimals: chain.decimals,
				}
			} catch (error) {
				console.error(`Chain ${chainId} native balance fetch failed:`, error)
				return {
					balance: '0',
					symbol: chain.nativeToken,
					decimals: chain.decimals,
				}
			}
		},
		[address, chains],
	)

	const fetchAllNativeBalances = useCallback(async (): Promise<[number, NativeBalance][]> => {
		if (!address) return []

		const promises = Object.values(chains).map(async c => {
			const balance = await fetchNativeBalance(Number(c.id))
			return [Number(c.id), balance] as [number, NativeBalance]
		})

		const results = await Promise.allSettled(promises)
		return results
			.filter(r => r.status === 'fulfilled')
			.map(r => (r as PromiseFulfilledResult<[number, NativeBalance]>).value)
	}, [address, chains, fetchNativeBalance])

	const refetchNativeChainsBalance = useCallback(
		async (chainIds: number[]) => {
			if (!address) return

			const results = await Promise.all(
				chainIds.map(async id => {
					try {
						const balance = await fetchNativeBalance(id)
						return [id, balance] as [number, NativeBalance]
					} catch (error) {
						console.error(`Failed refetch for chain ${id}:`, error)
						return null
					}
				}),
			)

			results.forEach(result => {
				if (result) setNativeBalance(result[0], result[1])
			})
		},
		[address, fetchNativeBalance, setNativeBalance],
	)

	const { data, isLoading } = useQuery({
		queryKey: ['nativeBalances', address],
		queryFn: fetchAllNativeBalances,
		enabled: !!address,
	})

	useEffect(() => {
		if (data) {
			const bulkUpdate = data.reduce(
				(acc, [chainId, balance]) => {
					acc[chainId] = balance
					return acc
				},
				{} as Record<number, NativeBalance>,
			)
			setNativeBalances(bulkUpdate)
		}
	}, [data, setNativeBalances])

	useEffect(() => {
		if (txStatus === Status.SUCCESS && sourceChain?.id) {
			refetchNativeChainsBalance([Number(sourceChain.id)])
		}
	}, [txStatus, sourceChain?.id, refetchNativeChainsBalance])

	useEffect(() => {
		setLoading(isLoading)
	}, [isLoading, setLoading])

	return { refetchNativeChainsBalance, isLoading }
}
