import type { FC } from 'react'
import { lazy } from 'react'
import { SwapWidget } from '../common/SwapWidget/SwapWidget'
import { useAccount } from 'wagmi'
import { ScreenLoader } from '../common/ScreenLoader/ScreenLoader'
import { useIsDesktop } from '@/hooks/useMediaQuery'
import { TokenWidget } from '../common/TokenWidget/TokenWidget'
import { GasWidget } from '../common/GasWidget/GasWidget'
import { useTxProcess } from '@/hooks/useTxProcess'
import { Status } from '@lanca/sdk'
import { ModalManager } from '../common/ModalManager/ModalManager'
import { RewardsNotification } from '../common/RewardsNotification/RewardsNotification'
import './Swap.pcss'


export const Swap: FC = () => {
	const { isConnecting } = useAccount()
	const { txStatus } = useTxProcess()

	const isDesktop = useIsDesktop()
	const isLoading = isConnecting
	const isWidgetVisible = !isDesktop && txStatus === Status.NOT_STARTED

	if (isLoading) {
		return <ScreenLoader />
	}

	let content = <SwapWidget />

	return (
		<div className="swap">
			{isWidgetVisible && (
				<div className="swap_widgets">
					<TokenWidget />
					<GasWidget />
				</div>
			)}

			{content}
			<RewardsNotification/>
			<ModalManager />
		</div>
	)
}
