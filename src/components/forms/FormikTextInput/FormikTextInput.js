// Third-party imports
import React, { useEffect } from "react"
import { ErrorMessage, useField } from "formik"

// Global imports
import { Flex, Text } from "@/components/generic"

// Local imports
import { StyledInput, ErrorStyle } from "../styles"

////////////////////////////////////////////////////////////////////////////////

const labelProps = {
	color: "#323536",
	fontSize: "12px",
	// fontStyle: "italic",
}

/**
 * @function FormikTextInput
 * @category Components
 * @subcategory Checkout
 * @description Renders a text input used to enter a short string in a Formik form.
 * @param {string} placeholder - The placeholder visible in the input when the input value is the empty string.
 * @param {string} type - HTML type of the input. Can take the values 'text', 'email' or 'tel'.
 * @param {string} name - The name this input is referred to by the form it's contained in.
 */
const FormikTextInput = ({
	options,
	type,
	name,
	placeholder,
	label,
	disabled,
	getSkipState,
	withLabel,
	...props
}) => {
	// Hooks
	const [field, meta] = useField(name)
	// Props
	const fieldInputProps = {
		...field,
		type,
		placeholder,
		isFieldInputValid: !(meta.touched && meta.error),
	}

	return (
		<Flex width="100%" flexDirection="column" {...props}>
			{withLabel && <Text {...labelProps}>{label}</Text>}
			<Flex position="relative" width="100%">
				<StyledInput
					{...fieldInputProps}
					disabled={disabled}
					max={options && options.max && options.max}
					min={options && options.min && options.min}
					step={options && options.step && options.step}
				/>
			</Flex>
			<ErrorStyle justifyContent="flex-start">
				<ErrorMessage name={field.name} />
			</ErrorStyle>
		</Flex>
	)
}

export default FormikTextInput
