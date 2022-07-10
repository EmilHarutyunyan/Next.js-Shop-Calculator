// Third-party imports
import React from "react"
import { WhatsappShareButton, WhatsappIcon } from "react-share"

// Global imports

// Local imports
import { SocialMediaShareButtonsStyles } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const _quote = (productCategory, co2Saved, litersOfWaterSaved) =>
	[
		`I analysed the footprint of my ${productCategory}!`,
		`💨 ${co2Saved} kg of CO₂ saved compared to industry average!`,
		`💧 ${litersOfWaterSaved} L of water saved compared to industry average!`,
		`Do you want to know as well? 👉🏻 footprint.staiy.com 👈🏻`,
	].join("\n")

const quote = (productCategory, eqCO2KmByCar, eqDaysDrinkWater) =>
	[
		`I calculated the environmental footprint of my ${productCategory}!`,
		`The carbon footprint is equivalent to ${eqCO2KmByCar} km driven by a petrol car,`,
		`nd the water footprint is equivalent to ${eqDaysDrinkWater} days of drinking water per person`,
		`Do you want to know your fashion footprint?  → footprint.staiy.com`,
	].join("\n")

/**
 * @function WhatsappShare
 * @category Social Media
 * @description Renders a button that creates a link to footprint.staiy.com that can be shared on WhatsApp.
 */
const WhatsappShare = ({
	productCategory,
	co2Saved,
	litersOfWaterSaved,
	eqCO2KmByCar,
	eqDaysDrinkWater,
}) => (
	<SocialMediaShareButtonsStyles>
		<WhatsappShareButton
			url="footprint.staiy.com"
			title={quote(productCategory, eqCO2KmByCar, eqDaysDrinkWater)}
		>
			<WhatsappIcon size={36} round />
		</WhatsappShareButton>
	</SocialMediaShareButtonsStyles>
)

export default WhatsappShare
