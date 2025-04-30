import { ThemeProvider as KitThemeProvider, useTheme } from '@concero/ui-kit'
import { PropsWithChildren, useEffect } from 'react'

const InnerThemeProvider = ({ children }: PropsWithChildren) => {
	const { theme } = useTheme()
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		document.documentElement.style.colorScheme = theme
	}, [theme])
	return children
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
	return (
		<KitThemeProvider>
			<InnerThemeProvider>{children}</InnerThemeProvider>
		</KitThemeProvider>
	)
}
