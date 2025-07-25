import { useState, useEffect } from 'react'

export const breakpoints = {
	mobile: '(max-width: 640px)',
	tablet: '(min-width: 641px) and (max-width: 1024px)',
	desktop: '(min-width: 1025px) and (max-width: 1920px)',
}

type BreakpointKey = keyof typeof breakpoints

const useMediaQuery = (query: string | BreakpointKey): boolean => {
	const [matches, setMatches] = useState<boolean>(false)
	const queryString = breakpoints[query as BreakpointKey] || query

	useEffect(() => {
		if (typeof window === 'undefined') return

		const media = window.matchMedia(queryString)
		setMatches(media.matches)
		const updateMatches = (e: MediaQueryListEvent): void => {
			setMatches(e.matches)
		}
		media.addEventListener('change', updateMatches)

		return () => {
			media.removeEventListener('change', updateMatches)
		}
	}, [queryString])

	return matches
}

export const useIsMobile = () => useMediaQuery('mobile')
export const useIsTablet = () => useMediaQuery('tablet')
export const useIsDesktop = () => useMediaQuery('desktop')

export default useMediaQuery
