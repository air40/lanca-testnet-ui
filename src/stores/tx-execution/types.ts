import type { Hash } from 'viem'
import type { UseBoundStoreWithEqualityFn } from 'zustand/traditional'
import type { StoreApi } from 'zustand/vanilla'
import { Status, StepType } from '@lanca/sdk'

export type TxExecutionState = {
	steps: {
		ALLOWANCE: Status
		BRIDGE: Status
	}
	txStatus: Status
	executionTime: string
	srcHash: Hash | null
	dstHash: Hash | null
	error: Error | string | null | unknown
}

export interface TxExecutionActions {
	setStepStatus: (stepType: StepType, status: Status) => void
	setExecutionTime: (time: string) => void
	setSrcHash: (hash: Hash) => void
	setDstHash: (hash: Hash) => void
	setError: (error: Error | string | null | unknown) => void
	reset: () => void
}

export type TxExecutionStateAndActions = TxExecutionState & TxExecutionActions

export type TxExecutionStore = UseBoundStoreWithEqualityFn<StoreApi<TxExecutionStateAndActions>>
