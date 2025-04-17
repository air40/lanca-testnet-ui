import type { FC } from 'react'
import { Faucet } from '@/components/faucet/Faucet'
import { MetaTags } from '@/components/common/MetaTags/MetaTags'

export const FaucetPage: FC = (): JSX.Element => {
	const title = 'Concero | Testnet'
	const description =
		'Description: Welcome to Concero Testnet – a risk-free, developer-focused blockchain sandbox for testing our fully decentralized cross-chain messaging solution featuring secure token swaps and seamless inter-chain communications.'

	return (
		<>
			<MetaTags title={title} description={description} />
			<main>
				<Faucet />
			</main>
		</>
	)
}
