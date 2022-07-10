// Third-party imports
import { useRef, useState, useEffect } from "react"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////
/**
 * @function useMeasure
 * @category Hooks
 * @description Tracks the height of an element
 */
const useMeasure = () => {
	const ref = useRef()
	const [height, setHeight] = useState(0)

	useEffect(() => {
		const resize = new ResizeObserver(([entry]) =>
			setHeight(entry.contentRect.height)
		)
		if (ref.current) resize.observe(ref.current)
		return () => resize.disconnect()
	}, [])

	return [{ ref }, { height }]
}

export default useMeasure
