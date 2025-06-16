import type { FC } from 'react'
import { lazy } from 'react'
import { SwapWidget } from '../common/SwapWidget/SwapWidget'
import { useAccount } from 'wagmi'
import { ScreenLoader } from '../common/ScreenLoader/ScreenLoader'
import { useIsWhitelisted } from '@/hooks/useIsWhitelisted'
import { useIsDesktop } from '@/hooks/useMediaQuery'
import { TokenWidget } from '../common/TokenWidget/TokenWidget'
import { GasWidget } from '../common/GasWidget/GasWidget'
import { useTxProcess } from '@/hooks/useTxProcess'
import { Status } from '@lanca/sdk'
import { ModalManager } from '../common/ModalManager/ModalManager'
import './Swap.pcss'

const NotWhitelisted = lazy(() =>
	import('../common/NotWhitelisted/NotWhitelisted').then(module => ({
		default: module.NotWhitelisted,
	})),
)

export const Swap: FC = () => {
	const { isConnecting, isConnected } = useAccount()
	const { isWhitelisted, isLoading: isWhitelistLoading } = useIsWhitelisted()
	const { txStatus } = useTxProcess()

	const isDesktop = useIsDesktop()
	const isLoading = isConnecting || isWhitelistLoading
	const isWidgetVisible = !isDesktop && txStatus === Status.NOT_STARTED && isWhitelisted

	if (isLoading) {
		return <ScreenLoader />
	}

	let content = <SwapWidget />

	if (!isWhitelisted && isConnected) {
		content = <NotWhitelisted />
	}

	return (
		<div className="swap">
			{isWidgetVisible && (
				<div className="swap_widgets">
					<TokenWidget />
					<GasWidget />
				</div>
			)}

			{content}
			<ModalManager />
		</div>
	)
}
