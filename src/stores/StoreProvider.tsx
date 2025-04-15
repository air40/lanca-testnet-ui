import type { FC, PropsWithChildren } from 'react'
import { TxExecutionStoreProvider } from './tx-execution/TxExecutionStore'
import { ChainsStoreProvider } from './chains/ChainsStore'
import { FormStoreProvider } from './form/FormStore'
import { BalancesStoreProvider } from './balances/BalancesStore'
import { ModalsStoreProvider } from './modals/ModalsStore'
import { LanesStoreProvider } from './lanes/LanesStore'

export const StoreProvider: FC<PropsWithChildren<{}>> = ({ children }): JSX.Element => {
	return (
		<ChainsStoreProvider>
			<BalancesStoreProvider>
				<FormStoreProvider>
					<ModalsStoreProvider>
						<TxExecutionStoreProvider>
							<LanesStoreProvider>{children}</LanesStoreProvider>
						</TxExecutionStoreProvider>
					</ModalsStoreProvider>
				</FormStoreProvider>
			</BalancesStoreProvider>
		</ChainsStoreProvider>
	)
}
