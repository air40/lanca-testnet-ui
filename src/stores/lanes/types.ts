import type { UseBoundStoreWithEqualityFn } from 'zustand/traditional'
import type { StoreApi } from 'zustand/vanilla'

export type Lane = boolean

export type LanesState = {
	lanes: Record<string, Lane>
	setLanes: (lanes: Record<string, Lane>) => void
	setLane: (key: string, isSupported: boolean) => void
	resetLanes: () => void
}

export type LanesStore = UseBoundStoreWithEqualityFn<StoreApi<LanesState>>
