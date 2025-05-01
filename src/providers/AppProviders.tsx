import type { FC, PropsWithChildren } from 'react'
import { Web3Provider } from './Web3Provider/Web3Provider'
import { PosthogProvider } from './PosthogProvider/PosthogProvider'
import { StoreProvider } from '@/stores/StoreProvider'
import { InitializeLoadables } from '@/hooks/useInitialize'
import { SDKProvider } from './SDKProvider/SDKProvider'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from '@concero/ui-kit'

export const AppProviders: FC<PropsWithChildren<{}>> = ({ children }) => {
	return (
		<HelmetProvider>
			<PosthogProvider>
				<Web3Provider>
					<StoreProvider>
						<SDKProvider>
							<InitializeLoadables />
							<ThemeProvider>{children}</ThemeProvider>
						</SDKProvider>
					</StoreProvider>
				</Web3Provider>
			</PosthogProvider>
		</HelmetProvider>
	)
}
