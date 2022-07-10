// Third-party imports
import React, { useEffect } from "react"
import { ErrorMessage, useField } from "formik"

// Global imports
import { Flex, Text } from "@/components/generic"

// Local imports
import Selector from "./Selector"
import { ErrorStyle } from "../styles"

////////////////////////////////////////////////////////////////////////////////

const nullFunction = () => {}

const labelProps = {
	color: "#323536",
	fontSize: "12px",
	// fontStyle: "italic",
}

/**
 * @function FormikSelector
 * @category Components
 * @subcategory Checkout
 * @description Renders a selector to be used in a Formik form to choose from an array of values.
 * @param {Array} options - The options to choose from in the selector.
 * @param {string} placeholder - The text to display in the selector when nothing is selected.
 * @param {string} name - The key to the Yup schema in the Formik form that this input injects its value in.
 * @param {Function} onChange - Callback to fire with the latest selected option as an input.
 */
const FormikSelector = ({
	withLabel,
	options,
	placeholder,
	name,
	label,
	disabled,
	onChange = nullFunction,
	...props
}) => {
	// Hooks
	const [field, meta, { setValue, setTouched, setError }] = useField(name)

	useEffect(() => {
		if (field.value) {
			setError("")
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [field.value])

	// Props
	const selectorProps = {
		...field,
		placeholder,
		options,
		value: options ? options.find(option => option.value === field.value) : "",
		onChange: option => {
			onChange(option.value)
			setValue(option.value)
		},
		fontSize: "12px",
		isFieldInputValid: !(meta.touched && meta.error),
		onMenuClose: () => setTouched(true),
	}

	return (
		<Flex width="100%" flexDirection="column" {...props}>
			{withLabel && <Text {...labelProps}>{label}</Text>}
			<Flex position="relative" width="100%">
				<Selector {...selectorProps} disabled={disabled} />
			</Flex>
			<ErrorStyle justifyContent="flex-start">
				<ErrorMessage name={field.name} />
			</ErrorStyle>
		</Flex>
	)
}

export default FormikSelector
