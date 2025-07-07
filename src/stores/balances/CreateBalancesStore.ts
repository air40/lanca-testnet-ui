import type { BalancesState } from './types'
import { createWithEqualityFn } from 'zustand/traditional'

export const CreateBalancesStore = () =>
	createWithEqualityFn<BalancesState>(
		set => ({
			balances: {},
			isLoading: false,
			fromBalance: '0',
			fromBalanceLoading: false,
			fromNativeBalance: '0',
			fromNativeBalanceLoading: false,
			toBalance: '0',
			toBalanceLoading: false,
			setBalance: (chain, balance) =>
				set(state => ({
					balances: {
						...state.balances,
						[chain]: balance,
					},
				})),
			setBalances: balances => set({ balances }),
			setLoading: isLoading => set({ isLoading }),
			setFromBalance: fromBalance => set({ fromBalance }),
			setFromBalanceLoading: fromBalanceLoading => set({ fromBalanceLoading }),
			setFromNativeBalance: fromNativeBalance => set({ fromNativeBalance }),
			setFromNativeBalanceLoading: fromNativeBalanceLoading => set({ fromNativeBalanceLoading }),
			setToBalance: toBalance => set({ toBalance }),
			setToBalanceLoading: toBalanceLoading => set({ toBalanceLoading }),
		}),
		Object.is,
	)
