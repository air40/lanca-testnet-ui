import type { FC } from 'react'
import './ChainFaucet.pcss'

type ChainProps = {
	name: string
	logoURI: string
	isDisabled?: boolean
	onClick?: () => void
}

export const ChainFaucet: FC<ChainProps> = ({ name, logoURI, isDisabled = false, onClick }): JSX.Element => {
	return (
		<div
			className={`chain_faucet ${isDisabled ? 'chain_faucet--disabled' : ''}`}
			onClick={isDisabled ? undefined : onClick}
		>
			<img className="chain_faucet_logo" src={logoURI} alt={name} />
			<p className="chain_faucet_name">{name}</p>
		</div>
	)
}
