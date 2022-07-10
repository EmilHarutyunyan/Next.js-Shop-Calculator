// Third-party imports
import React, { useCallback } from "react"
import { useField } from "formik"

// Global imports
import { Flex, Hider, Icon } from "@/components/generic"

// Local imports
import {
	CheckboxContainer,
	SquareCheckmark,
	StyledCheckbox,
	CheckboxLabel,
} from "./styles"

////////////////////////////////////////////////////////////////////////////////

const nullFunction = () => {}

/**
 * @function FormikRadioButton
 * @category Components
 * @subcategory Checkout
 * @description Renders a radio button to select a payment method in the PaymentMethodForm.
 * @param {string} name - The name of the Formik property in the schema corresponding to this input.
 * @param {string} label - The text label to put next to the radio button.
 * @param {string} icon - The path to the SVG icon to put at the end of the radio button.
 * @param {string} value - The value to insert in the values of the form when this radio button is isSelected.
 * @param {boolean} isSelected - Whether the radio button is selected or not.
 */
const FormikRadioButton = ({
	name,
	label,
	icon,
	value,
	onChange = nullFunction,
	...props
}) => {
	// Hooks
	const [field, , { setValue }] = useField(name)
	const toggleCheck = useCallback(() => {
		onChange(value)
		setValue(value)
		// Not adding 'setValue' to dependencies since it induces an infinite loop
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [value, onChange])

	// Variables
	const isSelected = value === field.value

	// Props
	const squareCheckmarkProps = {
		checked: isSelected,
	}

	const checkboxInputProps = {
		...field,
		value,
		checked: isSelected,
	}

	return (
		<CheckboxContainer {...props} onClick={toggleCheck}>
			<Hider>
				<input type="radio" {...checkboxInputProps} />
			</Hider>
			<Flex>
				<StyledCheckbox>
					<SquareCheckmark {...squareCheckmarkProps} />
				</StyledCheckbox>
				<CheckboxLabel>{label}</CheckboxLabel>
			</Flex>
			<Icon icon={icon} fontSize="27px" />
		</CheckboxContainer>
	)
}

export default FormikRadioButton
