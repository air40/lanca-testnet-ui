import { useContext } from 'react'
import { LanesContext } from './LanesContext'

export const useLanesStore = () => {
	const useStore = useContext(LanesContext)
	if (!useStore) {
		throw new Error(`You forgot to wrap your component in <LanesStoreProvider>.`)
	}

	const lanes = useStore(state => state.lanes)
	const setLanes = useStore(state => state.setLanes)
	const setLane = useStore(state => state.setLane)
	const resetLanes = useStore(state => state.resetLanes)

	return {
		lanes,
		setLanes,
		setLane,
		resetLanes,
	}
}
