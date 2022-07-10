// Third-party imports
import React from "react"

// Global imports

// Local imports
import { LogoImage, LogoContainer } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const Logo = ({ color }) => (
	<LogoContainer>
		{/* <LogoImage src={`/static/images/${color}-logo.svg`} alt="logo" /> */}
		<LogoImage src={`/static/images/logo_back_black.png`} alt="logo" />
	</LogoContainer>
)

export default Logo
