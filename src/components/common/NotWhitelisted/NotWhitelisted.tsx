import type { FC } from 'react'
import { memo, useCallback } from 'react'
import { Button } from '@concero/ui-kit'
import { WhitelistEvents } from '@/events/events'
import { useTrackEvent } from '@/hooks/useTrackEvent'
import './NotWhitelisted.pcss'

export const NotWhitelisted: FC = memo(() => {
	const { trackEvent } = useTrackEvent()
	const link = 'https://forms.gle/LanqiU9Yw1D35kbNA'

	const handleClick = useCallback(() => {
		trackEvent({
			...WhitelistEvents.APPLY_PRESSED,
		})
		window.open(link, '_blank', 'noopener,noreferrer')
	}, [link, trackEvent])

	return (
		<div className="not_whitelisted">
			<div className="not_whitelisted_content">
				<h3 className="not_whitelisted_title">Apply for Whitelist</h3>
				<img src="/Swap/NotWhitelisted.webp" alt="Tokens" />
				<p className="not_whitelisted_subtitle">
					You’re not currently on the whitelist. To request access, please complete the application form. Our
					team will review your submission, and we’ll announce on social media once access is granted.
				</p>
			</div>
			<Button size="l" onClick={handleClick} data-testid="whitelist-button">
				Get Invite
			</Button>
		</div>
	)
})

NotWhitelisted.displayName = 'NotWhitelisted'
