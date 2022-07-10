// Third-party imports
import React from "react"

// Global imports
// import { Icon } from "@/components/generic"

// Local imports
import { StyledButton } from "./styles"
import { formFieldsActions } from "@/redux/actions"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function StartButton
 * @category Components
 * @subcategory Checkout
 * @description Styled button to use in a form to start completing the form.
 * @param {string} label - The label to put on the button.
 */
const StartButton = ({ label, action, disabled, ...props }) => {
	return (
		<StyledButton onClick={action} disabled={disabled} type="button">
			{label}
		</StyledButton>
	)
}

export default StartButton
