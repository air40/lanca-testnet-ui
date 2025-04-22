import { memo, type FC } from 'react'
import { Swap } from '@/components/swap/Swap'
import { MetaTags } from '@/components/common/MetaTags/MetaTags'
import { Maintenance } from '@/components/common/Maintenance/Maintenance'
import { maintenance_mode } from '@/configuration/constants'

const META_TITLE = 'Concero | Testnet'
const META_DESCRIPTION =
	'Welcome to Concero Testnet – a risk-free, developer-focused blockchain sandbox for testing our fully decentralized cross-chain messaging solution featuring secure token swaps and seamless inter-chain communications.'
const PREFETCH_URL = 'https://api.concero.io'

export const SwapPage: FC = memo((): JSX.Element => {
	const MainContent = maintenance_mode ? Maintenance : Swap

	return (
		<>
			<MetaTags title={META_TITLE} description={META_DESCRIPTION} prefetchUrl={PREFETCH_URL} />
			<main>
				<MainContent />
			</main>
		</>
	)
})
