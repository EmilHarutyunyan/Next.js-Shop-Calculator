// Third-party imports
import React from "react"

// Global imports
import Medal from "src/components/generic/visuals/Icon/library/medal.svg"

// Local imports
import {
	FootprintBenchmarkText,
	FootprintBenchmarkContainer,
	MedalIconContainer,
} from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function finishInS
 * @description Checks if the string passed as parameter finish with the letter "s"
 * @param {string} str
 * @returns boolean
 */
const finishInS = str => str.toLowerCase().slice(-1) === "s"

/**
 * @function FootPrintDesclaimer
 * @category Components
 * @subcategory ?
 * @description ?
 */
const FootprintBenchmark = ({
	data: {
		positionUniqueCombination,
		positionGeneral,
		percentage,
		item,
		totalUniqueCombination,
		totalGeneral,
	},
}) => {
	return (
		<>
			<MedalIconContainer>
				<Medal></Medal>
			</MedalIconContainer>
			<FootprintBenchmarkContainer>
				<FootprintBenchmarkText>
					Your <strong>{item}</strong> ranks on position{" "}
					<strong>{positionUniqueCombination}</strong> among{" "}
					<strong>{totalUniqueCombination}</strong> other unique combinations of
					inputs entered for {finishInS(item) ? `${item}` : `${item}s`}. It is
					better than <strong>{percentage.toFixed(2)}%</strong> of total{" "}
					<strong>{totalGeneral}</strong>{" "}
					{finishInS(item) ? `${item}` : `${item}s`} evaluate with the Staiy
					Product Environmental Footprint Calculator.
				</FootprintBenchmarkText>
			</FootprintBenchmarkContainer>
		</>
	)
}

export default FootprintBenchmark
