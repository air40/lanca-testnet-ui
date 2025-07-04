import React, { useEffect, useState } from 'react'
import { Button, IconButton } from '@concero/ui-kit'
import { CloseIcon } from '@/assets/icons/close'
import { RewardIcon } from '@/assets/icons/reward'
import './RewardsNotification.pcss'

const STORAGE_KEY = 'concero_rewards_notification'
const HIDE_DURATION_MS = 12 * 60 * 60 * 1000

export const RewardsNotification: React.FC = () => {
	const [visible, setVisible] = useState<boolean>(false)

	useEffect(() => {
		const closedAt = localStorage.getItem(STORAGE_KEY)
		if (!closedAt) {
			setVisible(true)
		} else {
			const closedTime = parseInt(closedAt, 10)
			const now = Date.now()
			if (now - closedTime > HIDE_DURATION_MS) {
				setVisible(true)
			}
		}
	}, [])

	const handleClose = () => {
		localStorage.setItem(STORAGE_KEY, Date.now().toString())
		setVisible(false)
	}

	if (!visible) return null

	return (
		<div className="rewards_notification">
			<div className="rewards_notification_container">
				<div className="rewards_notification_content">
					<div className="rewards_notification_icon">
						<RewardIcon />
					</div>
					<div className="rewards_notification_details">
						<div className="rewards_notification_description">
							<span className="rewards_notification_title">Earn CERs for Every Bridge</span>
							<span className="rewards_notification_subtitle">
								Earn CERs for bridges; complete quests for bonus CERs in Rewards portal
							</span>
						</div>
						<Button
							size="s"
							variant="primary"
							onClick={() =>
								window.open('https://app.concero.io/rewards', '_blank', 'noopener,noreferrer')
							}
						>
							Open Rewards Portal
						</Button>
					</div>
				</div>
				<IconButton size="s" variant="secondary" onClick={handleClose}>
					<CloseIcon />
				</IconButton>
			</div>
		</div>
	)
}
