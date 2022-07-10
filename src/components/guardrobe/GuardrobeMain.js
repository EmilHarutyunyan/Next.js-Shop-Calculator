// Third-party imports
import { F } from "lodash/fp"
import React from "react"

// Global imports
import { Flex } from "../generic"
import Card from "../generic/common/Card/Card"
import GuardrobeStats from "./Stats"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function FootPrintDesclaimer
 * @category Components
 * @subcategory ?
 * @description ?
 */
const GuardrobeMain = ({ data }) => {
	return (
		<>
			<h2 style={{ color: "#323536", fontFamily: "Basic Sans" }}>My Guardrobe</h2>
			{!data || data.length === 0 ? (
				<p style={{ color: "black", fontSize: "0.9em" }}>Loading...</p>
			) : (
				<Flex>
					<div style={{ marginRight: "50px" }}>
						{data &&
							data.length > 0 &&
							data.map(g => {
								return (
									<Card
										main={{ label: "Item", value: g.itemName }}
										secondary={{
											label: "CO2 Footprint",
											value: g.CO2Footprint.total.toFixed(2),
										}}
										third={{
											label: "Water Footprint",
											value: g.waterFootprint.total.toFixed(2),
										}}
										fourth={{
											label: "Calculation date",
											value: g.createdAt,
										}}
									/>
								)
							})}
					</div>
					<div>
						<GuardrobeStats data={data} />
					</div>
				</Flex>
			)}
		</>
	)
}

export default GuardrobeMain
