import { memo, type FC } from 'react'
import { Faucet } from '@/components/faucet/Faucet'
import { MetaTags } from '@/components/common/MetaTags/MetaTags'

const META_TITLE = 'Concero | Faucet List'
const META_DESCRIPTION =
	'Welcome to Concero Testnet Faucet Hub – your ultimate source for free testnet tokens across leading networks like Blast, Cronos, Goerli, Sepolia, Polygon, Avalanche and more. Optimize your blockchain testing workflow with our user‑friendly UI, comprehensive network coverage, and secure token bridges'

export const FaucetPage: FC = memo((): JSX.Element => {
	return (
		<>
			<MetaTags title={META_TITLE} description={META_DESCRIPTION} />
			<main>
				<Faucet />
			</main>
		</>
	)
})

FaucetPage.displayName = 'FaucetPage'
