// Third-party imports
import React, { useEffect } from "react"

// Global imports

// Local imports
import { FootprintIntroductionContainer, FootprintIntroductionText } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function FootprintIntroduction
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {Function} onSubmit - Function to call when the form is submitted.
 */
const FootprintIntroduction = ({ unCompleteForm }) => {
	useEffect(() => {
		unCompleteForm()
	})

	return (
		<FootprintIntroductionContainer>
			<FootprintIntroductionText>
				Calculate your fashion items' footprint in terms of liters of water
				consumed and CO₂ emissions with our footprint calculator!
			</FootprintIntroductionText>
		</FootprintIntroductionContainer>
	)
}

export default FootprintIntroduction
