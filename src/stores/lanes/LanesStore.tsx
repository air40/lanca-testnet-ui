import type { PropsWithChildren } from 'react'
import type { LanesStore } from './types'
import { CreateLanesStore } from './CreateLanesStore'
import { useRef } from 'react'
import { LanesContext } from './LanesContext'

export function LanesStoreProvider({ children }: PropsWithChildren<{}>) {
	const storeRef = useRef<LanesStore | null>(null)
	if (!storeRef.current) {
		storeRef.current = CreateLanesStore()
	}

	return <LanesContext.Provider value={storeRef.current}>{children}</LanesContext.Provider>
}
