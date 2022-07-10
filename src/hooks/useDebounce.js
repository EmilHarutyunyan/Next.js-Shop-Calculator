// Third-party imports
import { useState, useEffect } from "react"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function useDebounce
 * @category Hooks
 * @description Used to add a interruptable delay to change a value.
 * This enables the gap between two calls of a repeatedly called callback to get larger.
 * Examples: form validation, input boxes, etc.
 * Documentation: https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
 * @param {number} value - The number of milliseconds to use as a debounced value.
 */
const useDebounce = (value, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)
		return () => {
			clearTimeout(handler)
		}
	}, [value, delay])

	return debouncedValue
}

export default useDebounce
