import { useContext } from 'react'
import { BalancesContext } from './BalancesContext'
import { shallow } from 'zustand/shallow'
import { BalanceType } from './types'

export const useBalancesStore = () => {
	const useStore = useContext(BalancesContext)
	if (!useStore) {
		throw new Error('You forgot to wrap your component in <BalancesStoreProvider>.')
	}

	const { balances, loading, values, setBalance, setBalances, setLoading, setValue } = useStore(
		state => ({
			balances: state.balances,
			loading: state.loading,
			values: state.values,
			setBalance: state.setBalance,
			setBalances: state.setBalances,
			setLoading: state.setLoading,
			setValue: state.setValue,
		}),
		shallow,
	)

	const isLoading = loading.global
	const fromBalance = values[BalanceType.From]
	const fromBalanceLoading = loading[BalanceType.From]
	const fromNativeBalance = values[BalanceType.FromNative]
	const fromNativeBalanceLoading = loading[BalanceType.FromNative]
	const toBalance = values[BalanceType.To]
	const toBalanceLoading = loading[BalanceType.To]

	return {
		balances,
		isLoading,
		fromBalance,
		fromBalanceLoading,
		fromNativeBalance,
		fromNativeBalanceLoading,
		toBalance,
		toBalanceLoading,
		setBalance,
		setBalances,
		setLoading,
		setValue,
	}
}
