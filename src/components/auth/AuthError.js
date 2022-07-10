// Third-party imports
import React from "react"

// Global imports

// Local imports
import { FootprintMainTitleContainer } from "./styles"

import AuthForm from "@/components/auth/AuthForm"
import { ErrorContainer } from "./styles"
import { ErrorContainerText } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function AuthError
 * @category Components
 * @subcategory ?
 * @description ?
 */
const AuthError = ({ error }) => {
	return (
		<>
			<ErrorContainer>
				<ErrorContainerText>
					{error && "Invalid email or password"}
				</ErrorContainerText>
			</ErrorContainer>
		</>
	)
}

export default AuthError
