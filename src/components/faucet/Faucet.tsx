import { FC, useState, useCallback, useMemo } from 'react'
import { FaucetInput } from '../common/FaucetInput/FaucetInput'
import { FaucetItem } from '../common/FaucetItem/FaucetItem'
import { faucets } from '../../configuration/faucets'
import './Faucet.pcss'

export const Faucet: FC = (): JSX.Element => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const filteredFaucets = useMemo(() => {
		if (!searchTerm.trim()) return faucets

		const query = searchTerm.toLowerCase().trim()
		return faucets.filter(faucet => {
			if (faucet.chainName.toLowerCase().includes(query) || faucet.faucetName.toLowerCase().includes(query)) {
				return true
			}

			if (faucet.searchKeywords && faucet.searchKeywords.some(keyword => keyword.toLowerCase().includes(query))) {
				return true
			}

			return false
		})
	}, [searchTerm])

	const handleFaucetClick = useCallback((url: string) => {
		window.open(url, '_blank', 'noopener,noreferrer')
	}, [])

	return (
		<div className="faucet">
			<div className="faucet_interface">
				<h1 className="faucet_heading">Faucet List</h1>
				<FaucetInput onChange={e => setSearchTerm(e.target.value)} value={searchTerm} />
			</div>
			<div className="faucet_list_grid">
				{filteredFaucets.map((faucet, index) => (
					<FaucetItem
						key={`${faucet.chainName}-${index}`}
						name={faucet.faucetName}
						isCCIP={faucet.isCCIP}
						logoURI={faucet.logoUrl}
						onClick={() => handleFaucetClick(faucet.faucetUrl)}
					/>
				))}
			</div>
		</div>
	)
}
