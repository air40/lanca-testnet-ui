import { useCallback, useRef } from 'react'
import { IExecutionConfig, IRouteType } from '@lanca/sdk'
import { useSDK } from './useSDK'
import { useExecutionListener } from './useExecutionListener'
import { useTrackEvent } from './useTrackEvent'
import { useWalletClient } from 'wagmi'
import { useFormStore } from '@/stores/form/useFormStore'
import { useTxExecutionStore } from '@/stores/tx-execution/useTxExecutionStore'
import { BridgeEvents } from '@/events/events'
import { useIsCCIPLane } from './useIsCCIPLane'

export const useExecuteRoute = (route: IRouteType | null) => {
	const { setError } = useTxExecutionStore()
	const { data: client } = useWalletClient()
	const { sourceChain, destinationChain, fromTokenAddress, toTokenAddress } = useFormStore()
	const { srcHash } = useTxExecutionStore()
	const { trackEvent } = useTrackEvent()
	const sdk = useSDK()
	const updateHandler = useExecutionListener()
	const { isCCIPLane } = useIsCCIPLane()

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
		} catch (error: unknown) {
			trackEvent({
				...BridgeEvents.FAILED,
				data: {
					srcChainId: sourceChain?.id,
					srcChainName: sourceChain?.name,
					dstChainId: destinationChain?.id,
					dstChainName: destinationChain?.name,
					fromToken: fromTokenAddress,
					toToken: toTokenAddress,
					isCCIPLane,
					srcHash,
					error: {
						category: (typeof error === 'object' && error !== null && 'category' in error) ? (error as any).category : 'Unknown',
						message: (typeof error === 'object' && error !== null && 'message' in error) ? (error as any).message : 'An error occurred while executing the route',
					}
				},
			})
			throw error
		}
	}, [route, sdk, updateHandler, setError])
}