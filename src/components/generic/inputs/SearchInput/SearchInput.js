// Third-party imports
import React, { useState, useEffect } from "react"

// Global imports
import { Icon } from "@/components/generic"
import { useDebounce, useTheme } from "@/hooks"
// Local imports
import { StyledInput, Container } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function SearchInput
 * @description Search input component to put in a search bar.
 * @param {function} change - Triggers when the input in the search box changes.
 * @param {function} search - Triggers 0.3 seconds after the user stopped typing.
 */
const SearchInput = ({ change = () => {}, placeholderText, search = () => {} }) => {
	// Hooks
	const [inputText, setInputText] = useState("")
	const searchText = useDebounce(inputText, 500)
	const theme = useTheme()

	const onInputChange = inputEvent => {
		setInputText(inputEvent.target.value)
		change(inputEvent.target.value)
	}

	useEffect(() => {
		search(searchText)
	}, [search, searchText])

	// Props
	const iconProps = {
		style: {
			color: theme.colors.white,
			borderRadius: "50%",
			width: "43px",
			height: "43px",
			padding: "12px",
		},
		iconFilename: "search",
	}

	const styleInputProps = {
		type: "search",
		placeholder: placeholderText,
		value: inputText,
		onChange: onInputChange,
	}

	return (
		<>
			<Container>
				<Icon {...iconProps} />
				<StyledInput {...styleInputProps} />
			</Container>
		</>
	)
}

export default SearchInput
