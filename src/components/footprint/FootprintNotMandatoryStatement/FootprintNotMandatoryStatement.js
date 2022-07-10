// Third-party imports
import React from "react"

// Global imports

// Local imports
import {
	FootprintNotMandatoryStatementContainer,
	FootprintNotMandatoryStatementText,
} from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function FootprintNotMandatoryStatement
 * @category Components
 * @subcategory ?
 * @description ?
 */
const FootprintNotMandatoryStatement = () => (
	<FootprintNotMandatoryStatementContainer>
		<FootprintNotMandatoryStatementText>
			This section is not mandatory to obtain results for your item's footprint. You
			can use the checkbox to skip this section and only calculate the footprint of
			the product, without considering your laundry's impact.
		</FootprintNotMandatoryStatementText>
	</FootprintNotMandatoryStatementContainer>
)

export default FootprintNotMandatoryStatement
