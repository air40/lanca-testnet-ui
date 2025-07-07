import type { Balance } from '@/stores/balances/types'
import { useEffect, useCallback, useMemo } from 'react'
import { Status } from '@lanca/sdk'
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { useBalancesStore } from '@/stores/balances/useBalancesStore'
import { useAccount } from 'wagmi'
import { Address, erc20Abi } from 'viem'
import { getPublicClient } from '@/utils/client'
import { TokenAddresses } from '@/configuration/addresses'
import { useTxExecutionStore } from '@/stores/tx-execution/useTxExecutionStore'
import { useFormStore } from '@/stores/form/useFormStore'

const SYMBOL = 'tCERO' as const
const DECIMALS = 18 as const

const DEFAULT_BALANCE: Balance = {
	balance: '0',
	symbol: SYMBOL,
	decimals: DECIMALS,
}

export const useLoadSelectedBalances = () => {
	const { address } = useAccount()
	const { setFromBalance, setFromBalanceLoading, setToBalance, setToBalanceLoading } = useBalancesStore()
	const { sourceChain, destinationChain } = useFormStore()
	const { txStatus } = useTxExecutionStore()

	const fetchChainBalance = useCallback(
		async (chainId: number): Promise<Balance> => {
			const client = getPublicClient(chainId)
			const tokenAddress = TokenAddresses[chainId]

			if (!tokenAddress || !address) return DEFAULT_BALANCE

			try {
				const timeout = new Promise<never>((_, reject) =>
					setTimeout(() => reject(new Error(`Balance fetch timeout for chain ${chainId}`)), 20000),
				)

				const balancePromise = client.readContract({
					address: tokenAddress as Address,
					abi: erc20Abi,
					functionName: 'balanceOf',
					args: [address],
				})

				const balance = await Promise.race([balancePromise, timeout])
				return { balance: balance.toString(), symbol: SYMBOL, decimals: DECIMALS }
			} catch (error) {
				console.error(`Chain ${chainId} balance fetch failed:`, error)
				return DEFAULT_BALANCE
			}
		},
		[address],
	)

	const fetchBalance = useCallback(
		async (chainId?: number): Promise<string> => {
			if (!address || !chainId) return '0'
			const { balance } = await fetchChainBalance(chainId)
			return balance
		},
		[address, fetchChainBalance],
	)

	const {
		data: fromBalanceData,
		isLoading: fromBalanceLoading,
		refetch: refetchFromBalance,
	}: UseQueryResult<string> = useQuery({
		queryKey: ['fromBalance', address, sourceChain?.id],
		queryFn: () => fetchBalance(sourceChain?.id ? Number(sourceChain.id) : undefined),
		enabled: Boolean(address && sourceChain?.id),
		staleTime: 30_000,
	})

	const {
		data: toBalanceData,
		isLoading: toBalanceLoading,
		refetch: refetchToBalance,
	}: UseQueryResult<string> = useQuery({
		queryKey: ['toBalance', address, destinationChain?.id],
		queryFn: () => fetchBalance(destinationChain?.id ? Number(destinationChain.id) : undefined),
		enabled: Boolean(address && destinationChain?.id),
		staleTime: 30_000,
	})

	useEffect(() => {
		setFromBalance(fromBalanceData ?? '0')
	}, [fromBalanceData, setFromBalance])

	useEffect(() => {
		setToBalance(toBalanceData ?? '0')
	}, [toBalanceData, setToBalance])

	useEffect(() => {
		setFromBalanceLoading(fromBalanceLoading)
	}, [fromBalanceLoading, setFromBalanceLoading])

	useEffect(() => {
		setToBalanceLoading(toBalanceLoading)
	}, [toBalanceLoading, setToBalanceLoading])

	useEffect(() => {
		if (txStatus === Status.SUCCESS) {
			refetchFromBalance()
			refetchToBalance()
		}
	}, [txStatus, refetchFromBalance, refetchToBalance])

	return useMemo(
		() => ({
			refetchFromBalance,
			refetchToBalance,
			fromBalanceLoading,
			toBalanceLoading,
		}),
		[refetchFromBalance, refetchToBalance, fromBalanceLoading, toBalanceLoading],
	)
}
