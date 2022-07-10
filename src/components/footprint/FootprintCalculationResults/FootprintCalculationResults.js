// Third-party imports
import React from "react"
import Link from "next/link"

// Global imports
import { Flex } from "@/components/generic"
import RetakeButton from "@/components/forms/RetakeButton"
import { RetakeButtonContainer } from "@/components/forms/RetakeButton/styles"
import Info from "src/components/generic/visuals/Icon/library/info.svg"
import { InfoIconContainer } from "../FootprintCalculatorForm/styles"
import { useRouter } from "next/router"
// Local imports

////////////////////////////////////////////////////////////////////////////////

const waterNumberOfDigits = 1
const co2NumberOfDigits = 2

const retakeButtonProps = {
	width: { _: "200px", sm: "250px" },
	label: "Calculate new item",
}

const goToGuardRobProps = {
	width: { _: "200px", sm: "250px" },
	label: "Go to my guardrobe",
}

/**
 * @function FootprintCalculationResults
 * @category Footprint
 * @description Describes the results of the footprint calculation and shows links to the user to share their results on social media.
 */
const FootprintCalculationResults = ({
	waterFootprint,
	CO2Footprint,
	eqCO2KmByCar,
	eqDaysDrinkWater,
	setNotCompleted,
}) => {
	const router = useRouter()

	// Props
	const resultsContainerProps = {
		width: "100%",
		height: "100%",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		color: "#323536",
	}

	return (
		<>
			<Flex {...resultsContainerProps}>
				<span
					style={{ paddingTop: "20px" }}
				>{`Your item's water footprint:`}</span>
				<ul>
					<Flex>
						<li>{`Manufacturing phase: ${waterFootprint.manufacturing.toFixed(
							waterNumberOfDigits
						)} L`}</li>
						<InfoIconContainer iconPos="-5">
							<Info></Info>
							<div className="info-text">
								The water footprint estimate for manufacturing includes
								the water consumed during raw material production and the
								consequent processes involved in producing your item.
							</div>
						</InfoIconContainer>
					</Flex>
					<Flex>
						<li>{`Usage phase: ${waterFootprint.usage.toFixed(
							waterNumberOfDigits
						)} L`}</li>
						<InfoIconContainer iconPos="-5">
							<Info></Info>
							<div className="info-text">
								Here the water footprint includes the water usage that
								occurs during your laundry activity based on mode of
								washing. This value is shown only when you define your use
								phase inputs.
							</div>
						</InfoIconContainer>
					</Flex>
				</ul>
				<span>{`Total: ${waterFootprint.total.toFixed(
					waterNumberOfDigits
				)} L`}</span>
				<span
					style={{ fontSize: "0.8em", fontWeight: "bold" }}
				>{`Equivalent days of drinking water per person: ${eqDaysDrinkWater.toFixed(
					waterNumberOfDigits
				)} days`}</span>
				<br />
				<br />
				<span style={{ paddingTop: "20px" }}>{"Your item's CO₂ footprint:"}</span>
				<br />
				<ul>
					<Flex>
						<li>{`Manufacturing phase: ${CO2Footprint.manufacturing.toFixed(
							co2NumberOfDigits
						)} kg`}</li>
						<InfoIconContainer iconPos="-5">
							<Info></Info>
							<div className="info-text">
								The CO2 footprint estimate for manufacturing includes the
								emissions that occurred during raw material production,
								yarn and fabric manufacturing and the conversion of the
								fabric into apparel items.
							</div>
						</InfoIconContainer>
					</Flex>
					<Flex>
						<li>{`Transportation phase: ${CO2Footprint.transport.toFixed(
							co2NumberOfDigits
						)} kg`}</li>
						<InfoIconContainer iconPos="-5">
							<Info></Info>
							<div className="info-text">
								The transport emissions estimated here are the emissions
								that occurred during the transportation of your item from
								the manufacturing location to your location. This value is
								shown only when you define your use phase inputs.
							</div>
						</InfoIconContainer>
					</Flex>
					<Flex>
						<li>{`Usage phase: ${CO2Footprint.usage.toFixed(
							co2NumberOfDigits
						)} kg`}</li>
						<InfoIconContainer iconPos="-5">
							<Info></Info>
							<div className="info-text">
								The use phase emissions consider the emissions that occur
								during your laundry activity. This value is shown only
								when you define your use phase inputs
							</div>
						</InfoIconContainer>
					</Flex>
				</ul>
				<span>{`Total: ${CO2Footprint.total.toFixed(
					co2NumberOfDigits
				)} kg`}</span>
				<span
					style={{ fontSize: "0.8em", fontWeight: "bold" }}
				>{`Equivalent kilometers driven by a car: ${eqCO2KmByCar.toFixed(
					waterNumberOfDigits
				)} km`}</span>
			</Flex>
			<Flex>
				<RetakeButtonContainer>
					<RetakeButton
						{...goToGuardRobProps}
						action={() => {
							router.push({
								pathname: `/guardrobe`,
							})
							setNotCompleted()
						}}
					/>
					<div style={{ width: "15px" }}></div>
					<RetakeButton {...retakeButtonProps} action={setNotCompleted} />
				</RetakeButtonContainer>
			</Flex>
		</>
	)
}

export default FootprintCalculationResults
