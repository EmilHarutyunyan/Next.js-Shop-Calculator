// Third-party imports
import React from "react"

// Global imports
// import { Icon } from "@/components/generic"

// Local imports
import { StyledButton } from "./styles"
import { formFieldsActions } from "@/redux/actions"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function RetakeButton
 * @category Components
 * @subcategory Checkout
 * @description Styled button to use in a form to go back to the form.
 * @param {string} label - The label to put on the button.
 */
const RetakeButton = ({ label, action, disabled, ...props }) => {
	return (
		<StyledButton onClick={action} disabled={disabled}>
			{label}
		</StyledButton>
	)
}

export default RetakeButton
