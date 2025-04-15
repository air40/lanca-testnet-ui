import { useMemo } from 'react'
import { useFormStore } from '@/stores/form/useFormStore'
import { useLanesStore } from '@/stores/lanes/useLanesStore'

export const useIsCCIPLane = () => {
	const { sourceChain, destinationChain } = useFormStore()
	const { lanes } = useLanesStore()

	const isCCIPLane = useMemo(() => {
		if (!sourceChain?.isCCIP || !destinationChain?.isCCIP) {
			return false
		}

		return lanes[destinationChain.id] === true
	}, [sourceChain, destinationChain, lanes])

	return {
		isCCIPLane,
	}
}
