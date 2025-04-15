import type { LanesState } from './types'
import { createWithEqualityFn } from 'zustand/traditional'

export const CreateLanesStore = () =>
	createWithEqualityFn<LanesState>(
		set => ({
			lanes: {},
			setLanes: lanes => set({ lanes }),
			setLane: (key, isSupported) =>
				set(state => ({
					lanes: {
						...state.lanes,
						[key]: isSupported,
					},
				})),
			resetLanes: () => set({ lanes: {} }),
		}),
		Object.is,
	)
