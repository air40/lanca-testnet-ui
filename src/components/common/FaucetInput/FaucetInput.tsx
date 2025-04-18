import { FC, ChangeEvent, memo } from 'react'
import { Input } from '@concero/ui-kit'
import { SearchIcon } from '@/assets/icons/search'
import './FaucetInput.pcss'

type FaucetInputProps = {
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FaucetInputComponent: FC<FaucetInputProps> = ({ value, onChange }): JSX.Element => {
	return (
		<Input
			placeholder="Search by name"
			size="l"
			icon={<SearchIcon />}
			className="faucet_input"
			classNameWrap="faucet_input_wrap"
			value={value}
			onChange={onChange}
		/>
	)
}

export const FaucetInput = memo(FaucetInputComponent)
