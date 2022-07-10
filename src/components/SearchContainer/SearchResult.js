import React, { ReactElement } from "react"
import CountryItem from "../CountryItem"


import FetchStatus from "./FetchStatus"
import { ListContainer } from "./Search.styles"

const SearchResult = ({ fetchState, countriesToShow, handleClick }) => {
	const { error, isLoading } = fetchState

	function ListBody({ error, isLoading, countriesToShow }) {
		if (error || isLoading) {
			return <FetchStatus text={error ? error : "Loading..."} />
		} else {
			return countriesToShow.length
				? countriesToShow.map((country) => (
						<CountryItem
							listType="searchResult"
							key={country.code}
							country={country}
							handleClick={handleClick}
						/>
				  ))
				: null
		}
	}

	return (
		<ListContainer>
			
				<ListBody
					error={error}
					isLoading={isLoading}
					countriesToShow={countriesToShow}
				/>
		
		</ListContainer>
	)
}

export default SearchResult
