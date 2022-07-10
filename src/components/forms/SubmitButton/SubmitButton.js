// Third-party imports
import React from "react"
import { useFormikContext } from "formik"

// Global imports
// import { Icon } from "@/components/generic"

// Local imports
import { StyledButton } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function SubmitButton
 * @category Components
 * @subcategory Checkout
 * @description Styled button to use in a form to submit it on click.
 * @param {string} label - The label to put on the button.
 */
const SubmitButton = ({ label, ...props }) => {
	// Hooks
	const { isSubmitting } = useFormikContext()

	return (
		<StyledButton type="submit" disabled={isSubmitting} {...props}>
			{isSubmitting ? null : label}
		</StyledButton>
	)
}

export default SubmitButton
