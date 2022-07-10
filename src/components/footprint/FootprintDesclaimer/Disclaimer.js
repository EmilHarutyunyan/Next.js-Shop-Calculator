// Third-party imports
import React from "react"

// Global imports

// Local imports
import { FootprintIntroductionContainer, FootprintIntroductionText } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function FootPrintDesclaimer
 * @category Components
 * @subcategory ?
 * @description ?
 */
const FootPrintDesclaimer = () => (
	<FootprintIntroductionContainer>
		<hr />
		<FootprintIntroductionText>
			Disclaimer: This website has been developed for educational purposes. It will
			help the users to only estimate the carbon and water footprint of their
			products. The results obtained are based on many assumptions and might not
			reflect completely with the real case, we are committed to improve our tool
			everyday. The results are to be used by the users to understand the impact
			that fashion has on the environment, and to spread awareness on adopting
			cleaner lifestyle options which have lesser negative environmental and social
			impact
		</FootprintIntroductionText>
	</FootprintIntroductionContainer>
)

export default FootPrintDesclaimer
