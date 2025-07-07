import { useContext } from 'react'
import { BalancesContext } from './BalancesContext'

export const useBalancesStore = () => {
	const useStore = useContext(BalancesContext)
	if (!useStore) {
		throw new Error(`You forgot to wrap your component in <BalancesStoreProvider>.`)
	}

	const balances = useStore(state => state.balances)
	const isLoading = useStore(state => state.isLoading)
	const fromBalance = useStore(state => state.fromBalance)
	const fromBalanceLoading = useStore(state => state.fromBalanceLoading)
	const fromNativeBalance = useStore(state => state.fromNativeBalance)
	const fromNativeBalanceLoading = useStore(state => state.fromNativeBalanceLoading)
	const toBalance = useStore(state => state.toBalance)
	const toBalanceLoading = useStore(state => state.toBalanceLoading)
	const setBalance = useStore(state => state.setBalance)
	const setBalances = useStore(state => state.setBalances)
	const setLoading = useStore(state => state.setLoading)
	const setFromBalance = useStore(state => state.setFromBalance)
	const setFromBalanceLoading = useStore(state => state.setFromBalanceLoading)
	const setFromNativeBalance = useStore(state => state.setFromNativeBalance)
	const setFromNativeBalanceLoading = useStore(state => state.setFromNativeBalanceLoading)
	const setToBalance = useStore(state => state.setToBalance)
	const setToBalanceLoading = useStore(state => state.setToBalanceLoading)

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
		setFromBalance,
		setFromBalanceLoading,
		setFromNativeBalance,
		setFromNativeBalanceLoading,
		setToBalance,
		setToBalanceLoading,
	}
}
