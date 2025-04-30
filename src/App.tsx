import '@concero/ui-kit/styles/concero/index.css'
import './styles/App.css'
import { AppProviders } from './providers/AppProviders'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConnectedRoutesGuard, DisconnectedRoutesGuard } from '@/components/common/RouteGuards/RouteGuards'
import { routes } from './configuration/routes'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { ScreenLoader } from './components/common/ScreenLoader/ScreenLoader'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() =>
	import('./pages/Home').then(module => ({
		default: module.HomePage,
	})),
)

const SwapPage = lazy(() =>
	import('./pages/Swap').then(module => ({
		default: module.SwapPage,
	})),
)

const FaucetPage = lazy(() =>
	import('./pages/Faucet').then(module => ({
		default: module.FaucetPage,
	})),
)

function App() {
	return (
		<AppProviders>
			<div className="wrapper-content">
				<BrowserRouter>
					<Header />
					<Suspense fallback={<ScreenLoader />}>
						<Routes>
							<Route element={<DisconnectedRoutesGuard />}>
								<Route path={routes.home} element={<HomePage />} />
							</Route>
							<Route element={<ConnectedRoutesGuard />}>
								<Route path={routes.swap} element={<SwapPage />} />
							</Route>
							<Route path={routes.faucet} element={<FaucetPage />} />
						</Routes>
					</Suspense>
					<Footer />
				</BrowserRouter>
			</div>
		</AppProviders>
	)
}

export default App
