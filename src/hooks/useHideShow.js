import { useEffect, useRef, useState } from "react"

const useHideShow = () => {
	const [showLinks, setShowLinks] = useState(false)
	const [customHight,setCustomHight] = useState(null)
	const headerRef = useRef(null)
	const childrenRef = useRef(null)

	useEffect(() => {
		const childrenHeight = childrenRef.current.getBoundingClientRect().height
		if (showLinks) {
			if(customHight) {
				headerRef.current.style.height = `${customHight}px`
				return
			}
			headerRef.current.style.height = `${childrenHeight}px`
		} else {
			headerRef.current.style.height = "0px"
		}
	}, [showLinks])

	return [headerRef, childrenRef, setShowLinks, setCustomHight]
}

export default useHideShow
