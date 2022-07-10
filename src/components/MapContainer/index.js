import React,{useState,useEffect} from 'react'
import { addColorProperties, fillWithColor, removeColor } from '../../utils/helper'
import SearchContainer from '../SearchContainer'
import { StyledMap, WrapperMap,Container } from "./Map.styles"
import Map from "./world.svg"
import usePrevious from './../../hooks/usePrevios';
function MapContainer({ handleCountry, countryName }) {
	const [countryOnHover, setCountryOnHover] = useState(null)
	const [selectedCountryCode, setSelectedCountryCode] = useState(null)
	const prevCount = usePrevious(selectedCountryCode)

	useEffect(() => {
		if (!selectedCountryCode) return
		fillWithColor(selectedCountryCode, "#EE7444", prevCount)
		removeColor(prevCount)
		// addColorProperties(visitedCountries, selectedCountryCode, "#EE7444")
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedCountryCode])

	const addToVisited = e => {
		
		const target = e.target.dataset.id || e.target.parentNode.dataset.id
		const countryName = e.target.dataset.name || e.target.parentNode.dataset.name
		const countryCode = target
		countryCode && setSelectedCountryCode(countryCode)
		countryName && handleCountry(countryName)
	}

	return (
		<WrapperMap>
			<Container>
				<SearchContainer
					addToVisited={e => addToVisited(e)}
					countryName={countryName}
				/>
				<StyledMap>
					<Map data-tip data-for="countryTooltip" />
				</StyledMap>
				{/* <button onClick={()=> Mat()}>dfsfdsgfds</button> */}
			</Container>
		</WrapperMap>
	)
}

export default MapContainer