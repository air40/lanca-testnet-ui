import { useEffect, useCallback, useMemo } from 'react'
import { Status } from '@lanca/sdk'
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { useBalancesStore } from '@/stores/balances/useBalancesStore'
import { useAccount } from 'wagmi'
import { useChainsStore } from '@/stores/chains/useChainsStore'
import { getPublicClient } from '@/utils/client'
import { useTxExecutionStore } from '@/stores/tx-execution/useTxExecutionStore'
import { useFormStore } from '@/stores/form/useFormStore'

export const useLoadNativeBalance = () => {
	const { address } = useAccount()
	const { chains } = useChainsStore()
	const { setFromNativeBalance, setFromNativeBalanceLoading } = useBalancesStore()
	const { txStatus } = useTxExecutionStore()
	const { sourceChain } = useFormStore()

	const fetchSourceNativeBalance = useCallback(async (): Promise<string> => {
		const chainId = sourceChain?.id ? Number(sourceChain.id) : undefined
		if (!address || !chainId) return '0'

		const client = getPublicClient(chainId)
		const chain = Object.values(chains).find(c => (c.id ? Number(c.id) : undefined) === chainId)
		if (!chain) return '0'

		try {
			const timeoutPromise = new Promise<never>((_, reject) =>
				setTimeout(() => reject(new Error(`Native balance fetch timeout for chain ${chainId}`)), 20000),
			)
			const balancePromise = client.getBalance({ address })
			const balance = await Promise.race([balancePromise, timeoutPromise])
			return balance.toString()
		} catch (error) {
			console.error(`Source chain ${chainId} native balance fetch failed:`, error)
			return '0'
		}
	}, [address, sourceChain?.id, chains])

	const {
		data: nativeBalanceData,
		isLoading: nativeBalanceLoading,
		refetch: refetchNativeBalance,
	}: UseQueryResult<string> = useQuery({
		queryKey: ['sourceNativeBalance', address, sourceChain?.id],
		queryFn: fetchSourceNativeBalance,
		enabled: !!address && !!sourceChain?.id,
		staleTime: 30_000,
	})

	useEffect(() => {
		setFromNativeBalance(nativeBalanceData ?? '0')
	}, [nativeBalanceData, setFromNativeBalance])

	useEffect(() => {
		setFromNativeBalanceLoading(nativeBalanceLoading)
	}, [nativeBalanceLoading, setFromNativeBalanceLoading])

	useEffect(() => {
		if (txStatus === Status.SUCCESS) {
			refetchNativeBalance()
		}
	}, [txStatus, refetchNativeBalance])

	return useMemo(
		() => ({
			refetchNativeBalance,
			nativeBalanceLoading,
		}),
		[refetchNativeBalance, nativeBalanceLoading],
	)
}
