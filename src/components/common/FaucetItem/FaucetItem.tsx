import type { FC } from 'react'
import { memo, useState } from 'react'
import { Tag } from '@concero/ui-kit'
import { IconButton } from '@concero/ui-kit'
import { RightIcon } from '@/assets/icons/right'
import './FaucetItem.pcss'

type ItemProps = {
	name: string
	isCCIP: boolean
	logoURI: string
	onClick: () => void
}

const Item: FC<ItemProps> = ({ name, isCCIP, logoURI, onClick }): JSX.Element => {
	const [isCardHovered, setIsCardHovered] = useState(false)
	const [isCardPressed, setIsCardPressed] = useState(false)

	return (
		<div
			className="faucet_item"
			onClick={onClick}
			onMouseEnter={() => setIsCardHovered(true)}
			onMouseLeave={() => {
				setIsCardHovered(false)
				setIsCardPressed(false)
			}}
			onMouseDown={() => setIsCardPressed(true)}
			onMouseUp={() => setIsCardPressed(false)}
			onTouchStart={() => setIsCardPressed(true)}
			onTouchEnd={() => setIsCardPressed(false)}
		>
			<div className="faucet_item_heading">
				<p className="faucet_item_title">{name}</p>
				{isCCIP && (
					<Tag variant="neutral" size="s">
						CCIP
					</Tag>
				)}
			</div>
			<img src={logoURI} alt="Chain_Logo" className="faucet_item_logo" />
			<div className="faucet_item_action">
				<IconButton
					variant="secondary"
					size="s"
					isHovered={isCardHovered}
					isPressed={isCardPressed}
					onClick={onClick}
				>
					<RightIcon />
				</IconButton>
			</div>
		</div>
	)
}

export const FaucetItem = memo(Item)
