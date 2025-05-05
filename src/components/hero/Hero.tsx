import type { FC } from 'react'
import { Button, useTheme } from '@concero/ui-kit'
import { useMemo } from 'react'
import { useAppKit } from '@reown/appkit/react'
import './Hero.pcss'

const Heading: FC = (): JSX.Element => {
	return <h1 className="heading">Welcome to Concero Testnet</h1>
}

const Subheading: FC = (): JSX.Element => {
	return (
		<p className="subheading">
			We offer developers and early adopters a risk-free space to test our fully decentralized cross-chain
			messaging solution, including token swaps and inter-chain communications
		</p>
	)
}

export const Hero: FC = () => {
	const { open } = useAppKit()
	const { theme } = useTheme()
	const isDarkTheme = theme == 'dark'
	const heading = useMemo(() => <Heading />, [])
	const subheading = useMemo(() => <Subheading />, [])

	return (
		<div className="hero">
			<div className="hero-content">
				{heading}
				{subheading}
			</div>
			<Button
				size="l"
				variant="primary"
				className="action-button"
				onClick={event => {
					event.preventDefault()
					open()
				}}
			>
				Connect wallet
			</Button>
			<img src={`/Hero/${isDarkTheme ? 'dark_' : ''}Welcome_Frame_6.webp`} alt="" className="illustration-one" />
			<img src={`/Hero/${isDarkTheme ? 'dark_' : ''}Welcome_Frame_7.webp`} alt="" className="illustration-two" />
			<img
				src={`/Hero/${isDarkTheme ? 'dark_' : ''}Welcome_tablet_frame_6.webp`}
				alt=""
				className="illustration-tablet"
			/>
		</div>
	)
}
