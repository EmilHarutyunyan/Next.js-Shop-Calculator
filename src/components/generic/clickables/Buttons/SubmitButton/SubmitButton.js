// Third-party imports
import React from "react"

// Global imports

// Local imports
import { Button } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const SubmitButton = ({ children, ...buttonBoxProps }) => (
	<Button as="button" {...buttonBoxProps}>
		<span>{children}</span>
	</Button>
)

export default SubmitButton
