// Third-party imports
import { useRef, useEffect } from "react"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function useExternalClick
 * @category Hooks
 * @description Fires a callback when a click event outside of a DOM object to which a ref is attached is observed.
 * @param {function} callback - Callback fired when the click event is detected.
 */
const useExternalClick = callback => {
	const containerRef = useRef()

	useEffect(() => {
		const listenerCallback = event => {
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				callback()
			}
		}

		window.addEventListener("mousedown", listenerCallback)
		// window.addEventListener("touchstart", listenerCallback) (If needed for mobile)

		return () => {
			window.removeEventListener("mousedown", listenerCallback)
			// window.removeEventListener("touchstart", listenerCallback) (If needed for mobile)
		}
	}, [containerRef, callback])

	return { containerRef }
}

export default useExternalClick
