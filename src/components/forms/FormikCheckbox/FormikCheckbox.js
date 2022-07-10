import React, { useCallback } from "react"
import { ErrorMessage, useField } from "formik"

// Global imports
import { Flex, Hider } from "@/components/generic"

// Local imports
import {
	CheckboxContainer,
	CheckboxLabel,
	SquareCheckmark,
	StyledCheckbox,
} from "./styles"
import { ErrorStyle } from "../styles"

////////////////////////////////////////////////////////////////////////////////

const nullFunction = () => {}

/**
 * @function FormikCheckbox
 * @category Components
 * @subcategory Checkout
 * @description Renders a checkbox used to manipulate a boolean state in a Formik form.
 * @param {string} name - The name of the field that Formik uses to refer to this boolean input.
 * @param {string} label - The label displayed to the right of the checkbox.
 * @param {Function} onChange - Callback fired with the new value of the checkbox each time it is clicked and on the initial render.
 */
const FormikCheckbox = ({ name, label, onChange = nullFunction, ...props }) => {
	// Hooks
	const [field, , { setValue }] = useField(name)
	const toggleCheck = useCallback(() => {
		onChange(!field.value)
		setValue(!field.value)
		// Not adding 'setValue' to dependencies since it induces an infinite loop
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [field])

	// Props
	const checkboxInputProps = {
		...field,
		checked: field.value,
	}

	return (
		<Flex width="100%" flexDirection="column">
			<CheckboxContainer {...props}>
				<Hider>
					<input type="checkbox" {...checkboxInputProps} />
				</Hider>
				<Flex>
					<StyledCheckbox onClick={toggleCheck}>
						<SquareCheckmark checked={field.value} />
					</StyledCheckbox>
					{/* We use this dangerouslySetInnerHTML to be able to underline the label */}
					<CheckboxLabel dangerouslySetInnerHTML={{ __html: label }} />
				</Flex>
			</CheckboxContainer>
			<ErrorStyle justifyContent="flex-start">
				<ErrorMessage name={name} />
			</ErrorStyle>
		</Flex>
	)
}

export default FormikCheckbox
