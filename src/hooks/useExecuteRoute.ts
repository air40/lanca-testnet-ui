import { useCallback, useRef } from 'react'
import { IExecutionConfig, IRouteType } from '@lanca/sdk'
import { useSDK } from './useSDK'
import { useExecutionListener } from './useExecutionListener'
import { useTxExecutionStore } from '@/stores/tx-execution/useTxExecutionStore'
import { useWalletClient } from 'wagmi'

export const useExecuteRoute = (route: IRouteType | null) => {
	const { setError } = useTxExecutionStore()
	const { data: client } = useWalletClient()
	const sdk = useSDK()
	const updateHandler = useExecutionListener()

	const configRef = useRef<IExecutionConfig>({
		updateRouteStatusHook: updateHandler,
	})

	return useCallback(async () => {
		if (!route) return null
		if (!sdk) throw new Error('SDK not initialized')
		if (!client) throw new Error('Wallet client not available')

		try {
			// @ts-ignore
			return await sdk.executeRoute(route, client, configRef.current)
		} catch (error) {
			setError(error)
			throw error
		}
	}, [route, sdk, updateHandler, setError])
}
