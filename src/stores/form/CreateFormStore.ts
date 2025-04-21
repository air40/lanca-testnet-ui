import type { FormState, FormStore, FormActions } from './types'
import type { Chain } from '../chains/types'
import type { Address } from 'viem'
import { chainSelectors } from '../chains/ChainInfo'
import { createWithEqualityFn } from 'zustand/traditional'

const defaultSourceChain: Chain = {
	id: '10143',
	name: 'Monad',
	logoURL: '/Chains/10143.svg',
	explorerURL: 'https://testnet.monadexplorer.com',
	isCCIP: true,
	nativeToken: 'MON',
	decimals: 18,
	selector: chainSelectors[10143],
	hastCEROFaucet: false,
	disabledLogoURL: '',
}

const defaultDestinationChain: Chain = {
	id: '6342',
	name: 'MegaETH',
	logoURL: '/Chains/6342.svg',
	explorerURL: 'https://www.megaexplorer.xyz/',
	isCCIP: false,
	nativeToken: 'MegaETH',
	decimals: 18,
	selector: chainSelectors[6342],
	hastCEROFaucet: true,
	disabledLogoURL: '/Chains/Disabled/6342.svg',
}

const initialState: FormState = {
	sourceChain: defaultSourceChain,
	destinationChain: defaultDestinationChain,
	fromAmount: '',
	fromTokenAddress: '0xa0AC414648590044d782ED0A5C6CBc5De1290aE5',
	toTokenAddress: '0xa0AC414648590044d782ED0A5C6CBc5De1290aE5',
	isLoading: false,
	error: null,
}

export const CreateFormStore = (): FormStore => {
	return createWithEqualityFn<FormState & FormActions>(
		(set, get) => ({
			...initialState,
			setSourceChain: (chain: Chain) => set({ sourceChain: chain }),
			setDestinationChain: (chain: Chain) => set({ destinationChain: chain }),
			setFromAmount: (amount: string) => {
				set({ fromAmount: amount })
			},
			setLoading: (isLoading: boolean) => {
				set({ isLoading })
			},
			setFromTokenAddress: (address: Address) => {
				set({ fromTokenAddress: address })
			},
			setToTokenAddress: (address: Address) => {
				set({ toTokenAddress: address })
			},
			setError: (error: string | null) => {
				set({ error })
			},
			swapTokensAndChains: () => {
				const { sourceChain, destinationChain, fromTokenAddress, toTokenAddress } = get()
				set({
					sourceChain: destinationChain,
					destinationChain: sourceChain,
					fromTokenAddress: toTokenAddress,
					toTokenAddress: fromTokenAddress,
				})
			},
		}),
		Object.is,
	)
}
