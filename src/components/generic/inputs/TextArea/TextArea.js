// Third-party imports
import React, { useState, useCallback } from "react"

// Global imports

// Local imports
import { StyledTextArea, Container, StyledLabel } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const TextArea = ({ label, placeholder, name, value, onChange, ...spaceProps }) => {
	const [inputText, setInputText] = useState(value)

	const change = useCallback(
		e => {
			const newInputText = e.target.value
			setInputText(newInputText)
			onChange(newInputText)
		},
		[onChange]
	)

	const styledTextAreaProps = {
		placeholder,
		name,
		value: inputText,
		onChange: change,
		...spaceProps,
	}

	return (
		<Container>
			<StyledLabel>{label}</StyledLabel>
			<StyledTextArea {...styledTextAreaProps} />
		</Container>
	)
}

export default TextArea
