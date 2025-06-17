import { useContext } from 'react'
import { TxExecutionContext } from './TxExecutionContext'

export const useTxExecutionStore = () => {
	const useStore = useContext(TxExecutionContext)

	if (!useStore) {
		throw new Error(`You forgot to wrap your component in <TxExecutionStoreProvider>.`)
	}

	const txStatus = useStore(state => state.txStatus)
	const steps = useStore(state => state.steps)
	const executionTime = useStore(state => state.executionTime)
	const srcHash = useStore(state => state.srcHash)
	const dstHash = useStore(state => state.dstHash)
	const error = useStore(state => state.error)

	const setStepStatus = useStore(state => state.setStepStatus)
	const setExecutionTime = useStore(state => state.setExecutionTime)
	const setSrcHash = useStore(state => state.setSrcHash)
	const setDstHash = useStore(state => state.setDstHash)
	const setError = useStore(state => state.setError)
	const reset = useStore(state => state.reset)

	return {
		txStatus,
		steps,
		executionTime,
		srcHash,
		dstHash,
		error,
		setStepStatus,
		setExecutionTime,
		setSrcHash,
		setDstHash,
		setError,
		reset,
	}
}
