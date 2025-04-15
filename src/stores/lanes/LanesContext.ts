import type { LanesStore } from './types'
import { createContext } from 'react'

export const LanesContext = createContext<LanesStore | null>(null)
