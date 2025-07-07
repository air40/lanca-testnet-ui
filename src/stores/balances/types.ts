import type { UseBoundStoreWithEqualityFn } from 'zustand/traditional'
import type { StoreApi } from 'zustand/vanilla'

export type Balance = {
	balance: string
	symbol: string
	decimals: number
}

export type BalancesState = {
	balances: Record<number, Balance>
	isLoading: boolean
	fromBalance: string
	fromBalanceLoading: boolean
	fromNativeBalance: string
	fromNativeBalanceLoading: boolean
	toBalance: string
	toBalanceLoading: boolean
	setBalance: (chain: number, balance: Balance) => void
	setBalances: (balances: Record<number, Balance>) => void
	setLoading: (isLoading: boolean) => void
	setFromBalance: (balance: string) => void
	setFromBalanceLoading: (loading: boolean) => void
	setFromNativeBalance: (balance: string) => void
	setFromNativeBalanceLoading: (loading: boolean) => void
	setToBalance: (balance: string) => void
	setToBalanceLoading: (loading: boolean) => void
}

export type BalancesStore = UseBoundStoreWithEqualityFn<StoreApi<BalancesState>>
