import React, { useState, useContext, useRef, useEffect } from "react"
import SearchBar from "./SearchBar"
import SearchResult from "./SearchResult"
import useFetchCountry from "../../hooks/useFetchCountry"
// import { VisitedCountryContext } from "../../contexts/VisitedCountryContext"
import { WrapSearch } from "./Search.styles"


function SearchContainer({ addToVisited,countryName }) {
	const [searchValue, setSearchValue] = useState(countryName || "")
	//   const { addToVisited } = useContext(VisitedCountryContext)
	const { fetchState, countriesToShow } = useFetchCountry(searchValue)
	const searchContainerRef = useRef(null)
	const resultRef = useRef(null)
	const handleInputChange = e => {
		setSearchValue(e.target.value)
	}

	const handleClick = e => {
		
		addToVisited(e)
		setSearchValue("")
	}

	const handleClickOutside = (e, ref) => {
		if (ref.current && !ref.current.contains(e.target)) {
			setSearchValue("")
		}
	}
	useEffect(() => {
		document.addEventListener("mousedown", e =>
			handleClickOutside(e, searchContainerRef)
		)
		return () => {
			document.removeEventListener("mousedown", e =>
				handleClickOutside(e, searchContainerRef)
			)
		}
	}, [searchContainerRef])

	return (
		<WrapSearch ref={searchContainerRef}>
			<SearchBar value={searchValue} handleInputChange={handleInputChange} />
			<SearchResult
				fetchState={fetchState}
				countriesToShow={countriesToShow}
				ref={resultRef}
				handleClick={e => handleClick(e)}
			/>
		</WrapSearch>
	)
}

export default SearchContainer
