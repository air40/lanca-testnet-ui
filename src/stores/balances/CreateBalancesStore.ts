import { createWithEqualityFn } from 'zustand/traditional'
import type { BalancesState, BalancesActions, Balance, BalanceType } from './types'

export const CreateBalancesStore = () =>
	createWithEqualityFn<BalancesState & BalancesActions>(
		set => ({
			balances: {},
			loading: {
				global: false,
				from: false,
				fromNative: false,
				to: false,
			},
			values: {
				from: '0',
				fromNative: '0',
				to: '0',
			},
			setBalance: (chain: number, balance: Balance) =>
				set(state => ({
					balances: {
						...state.balances,
						[chain]: balance,
					},
				})),
			setBalances: (balances: Record<number, Balance>) => set({ balances }),
			setLoading: (type: BalanceType | 'global', value: boolean) =>
				set(state => ({
					loading: {
						...state.loading,
						[type]: value,
					},
				})),
			setValue: (type: BalanceType, value: string) =>
				set(state => ({
					values: {
						...state.values,
						[type]: value,
					},
				})),
		}),
		Object.is,
	)
