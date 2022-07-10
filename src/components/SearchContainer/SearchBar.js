import React, { useState, useEffect } from "react"
import { Input, InputWrapper, LupeWrap } from "./Search.styles"
import Lupe from "./lupe.svg"


const SearchBar = ({ value, handleInputChange }) => {
	const [IsLabelFloat, setIsLabelFloat] = useState(false)

	useEffect(() => {
		value ? setIsLabelFloat(true) : setIsLabelFloat(false)
	}, [value])

	return (
		<InputWrapper>
			{/* <StyledIcon /> */}
			<label htmlFor="search" >
			</label>
			<Input
				// labelFloat={IsLabelFloat}
				id="search"
				type="text"
				value={value}
				onChange={handleInputChange}
				autoComplete="off"
				placeholder="Type in the country"
			/>
			<LupeWrap>
				<Lupe  />
			</LupeWrap>
		</InputWrapper>
	)
}

export default SearchBar
