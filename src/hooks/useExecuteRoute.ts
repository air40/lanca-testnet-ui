import { useCallback, useRef } from 'react'
import { getWalletClient } from '@wagmi/core'
import { adapter } from '@/configuration/wagmi'
import { IExecutionConfig, IRouteType } from '@lanca/sdk'
import { useSDK } from './useSDK'
import { useExecutionListener } from './useExecutionListener'
import { useTxExecutionStore } from '@/stores/tx-execution/useTxExecutionStore'

export const useExecuteRoute = (route: IRouteType | null) => {
	const { setError } = useTxExecutionStore()
	const sdk = useSDK()
	const updateHandler = useExecutionListener()

	const configRef = useRef<IExecutionConfig>({
		updateRouteStatusHook: updateHandler,
	})

	return useCallback(async () => {
		if (!route) return null
		if (!sdk) throw new Error('SDK not initialized')

		try {
			const chainId = Number(route.from.chain.id)
			const client = await getWalletClient(adapter.wagmiConfig, { chainId })

			// @ts-ignore
			return await sdk.executeRoute(route, client, configRef.current)
		} catch (error) {
			setError(error)
			throw error
		}
	}, [route, sdk, updateHandler, setError])
}
