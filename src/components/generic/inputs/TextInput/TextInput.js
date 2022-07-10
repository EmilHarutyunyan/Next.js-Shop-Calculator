// Third-party imports
import React, { useState, useCallback } from "react"

// Global imports

// Local imports
import { Container, StyledTextInputLabel, StyledTextInput } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const TextInput = ({
	label,
	placeholder,
	name,
	value,
	type,
	htmlFor,
	onChange,
	...spaceProps
}) => {
	const [inputText, setInputText] = useState(value)

	const change = useCallback(
		e => {
			const newInputText = e.target.value
			setInputText(newInputText)
			onChange(newInputText)
		},
		[onChange]
	)

	const labelProps = {
		as: "label",
		htmlFor,
		children: label,
	}

	const styledInputProps = {
		placeholder,
		name,
		value: inputText,
		type,
		onChange: change,
		...spaceProps,
	}

	return (
		<Container>
			<StyledTextInputLabel {...labelProps} />
			<StyledTextInput {...styledInputProps} />
		</Container>
	)
}

export default TextInput
