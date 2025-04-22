import { memo, type FC } from 'react'
import './Maintenance.pcss'

export const Maintenance: FC = memo((): JSX.Element => {
	return (
		<div className="maintenance_wrapper">
			<div className="maintenance_card">
				<h3 className="maintenance_card_title">We will be back up and running shortly.</h3>
				<p className="maintenance_card_description">
					Our infrastructure is currently undergoing maintenance to improve your experience. Thank you for
					your patience!
				</p>
			</div>
		</div>
	)
})

Maintenance.displayName = 'Maintenance'
