// Third-party imports
import React from "react"

// Global imports
// import { Icon } from "@/components/generic"

// Local imports
import { StyledButton } from "./styles"
import { formFieldsActions } from "@/redux/actions"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function ContiueButton
 * @category Components
 * @subcategory Checkout
 * @description Styled button to use in a form to submit it on click.
 * @param {string} label - The label to put on the button.
 */
const ContinueButton = ({ label, action, disabled, ...props }) => {
	return (
		<StyledButton onClick={action} disabled={disabled}>
			{label}
		</StyledButton>
	)
}

export default ContinueButton
