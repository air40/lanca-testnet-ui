import type { UseBoundStoreWithEqualityFn } from 'zustand/traditional'
import type { StoreApi } from 'zustand/vanilla'

export enum BalanceType {
	From = 'from',
	FromNative = 'fromNative',
	To = 'to',
}

export type Balance = {
	balance: string
	symbol: string
	decimals: number
}

export type BalancesState = {
	balances: Record<number, Balance>
	loading: {
		global: boolean
		[BalanceType.From]: boolean
		[BalanceType.FromNative]: boolean
		[BalanceType.To]: boolean
	}
	values: {
		[BalanceType.From]: string
		[BalanceType.FromNative]: string
		[BalanceType.To]: string
	}
}

export type BalancesActions = {
	setBalance: (chain: number, balance: Balance) => void
	setBalances: (balances: Record<number, Balance>) => void
	setLoading: (type: BalanceType | 'global', value: boolean) => void
	setValue: (type: BalanceType, value: string) => void
}

export type BalancesStore = UseBoundStoreWithEqualityFn<StoreApi<BalancesState & BalancesActions>>
