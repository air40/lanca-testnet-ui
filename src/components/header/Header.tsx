import { FC, useMemo, memo } from 'react'
import { useLocation } from 'react-router-dom'
import { GasWidget } from '../common/GasWidget/GasWidget'
import { WalletButton } from '../common/WalletButton/WalletButton'
import { routes } from '../../configuration/routes'
import { useIsDesktop, useIsMobile } from '@/hooks/useMediaQuery'
import { TokenWidget } from '../common/TokenWidget/TokenWidget'
import './Header.pcss'
import { useTheme } from '@concero/ui-kit'

type LogoProps = {
	isMobile?: boolean
}

const Logo: FC<LogoProps> = memo(({ isMobile }) => {
	const { theme } = useTheme()
	const isDarkTheme = theme == 'dark'
	const logoSrc = isMobile
		? `/Header/${isDarkTheme ? 'dark_' : ''}ConceroShortLogo.svg`
		: `/Header/${isDarkTheme ? 'dark_' : ''}ConceroLogo.svg`
	return (
		<a href={`https://testnet.concero.io${routes.home}`} target="_blank" rel="noopener noreferrer">
			<img src={logoSrc} alt="Concero" className="header__logo" />
		</a>
	)
})

export const Header: FC = () => {
	const { pathname } = useLocation()

	const isMobile = useIsMobile()
	const isDesktop = useIsDesktop()
	const isWidgetVisible = isDesktop

	const headerMap = useMemo(
		() => ({
			[routes.home]: (
				<header className="home-header">
					<Logo />
				</header>
			),
			[routes.faucet]: (
				<header className="home-header">
					<Logo />
				</header>
			),
			[routes.swap]: (
				<header className="swap-header">
					<Logo isMobile={isMobile} />
					<div className="swap-header__actions">
						{isWidgetVisible && <TokenWidget />}
						{isWidgetVisible && <GasWidget />}
						<WalletButton />
					</div>
				</header>
			),
		}),
		[isMobile, isDesktop],
	)

	return headerMap[pathname] || null
}
