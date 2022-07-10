// Third-party imports
import Link from "next/link"
import router from "next/router"
import React from "react"
import RetakeButton from "../forms/RetakeButton"
import { useRouter } from "next/router"

// Global imports
import { Flex } from "../generic"
import Card from "../generic/common/Card/Card"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const retakeButtonProps = {
	width: { _: "200px", sm: "250px" },
	label: "Calculate new item's footprint",
}

const calculateAverage = arr =>
	(arr.reduce((previous, current) => previous + current) / arr.length).toFixed(2)

/**
 * @function FootPrintDesclaimer
 * @category Components
 * @subcategory ?
 * @description ?
 */
const GuardrobeStats = ({ data }) => {
	const router = useRouter()
	return (
		<div>
			{data && data.length > 0 && (
				<div>
					<div style={{ color: "#323536" }}>
						Total items calculated: <strong>{data.length}</strong>
					</div>
					<div style={{ color: "#323536" }}>
						Average CO2 Consumed:{" "}
						<strong>
							{calculateAverage(data.map(d => d.CO2Footprint.total))} Kg.
						</strong>
					</div>
					<div style={{ color: "#323536" }}>
						Average Water Consumed:{" "}
						<strong>
							{calculateAverage(data.map(d => d.waterFootprint.total))} L.
						</strong>
					</div>
					<p>
						{" "}
						<RetakeButton
							{...retakeButtonProps}
							action={() => router.push("/")}
						/>
					</p>
				</div>
			)}
		</div>
	)
}

export default GuardrobeStats
