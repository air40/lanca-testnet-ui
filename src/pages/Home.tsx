import { memo, type FC } from 'react'
import { Hero } from '@/components/hero/Hero'
import { MetaTags } from '@/components/common/MetaTags/MetaTags'

const META_TITLE = 'Concero | Testnet'
const META_DESCRIPTION =
	'Welcome to Concero Testnet – a risk-free, developer-focused blockchain sandbox for testing our fully decentralized cross-chain messaging solution featuring secure token swaps and seamless inter-chain communications.'

export const HomePage: FC = memo((): JSX.Element => {
	return (
		<>
			<MetaTags title={META_TITLE} description={META_DESCRIPTION} />
			<main>
				<Hero />
			</main>
		</>
	)
})
