// Third-party imports
import React from "react"
import { useSelector } from "react-redux"
// Global imports
import { Flex } from "@/components/generic"

// Local imports
import { FacebookShare, WhatsappShare, TwitterShare, LinkedinShare } from "./Providers"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function SocialMediaShareButtons
 * @category Social Media
 * @description Renders an array of buttons that create links to footprint.staiy.com that can be shared on social media.
 */
const SocialMediaShareButtons = ({}) => {
	// Hooks
	const {
		formValues,
		itemTypes,
		CO2Footprint,
		waterFootprint,
		eqCO2KmByCar,
		eqDaysDrinkWater,
	} = useSelector(({ formFields }) => formFields)

	const productCategory = (
		itemTypes.find(({ _id }) => _id === formValues.itemType) || { casualName: "item" }
	).casualName

	const socialMediaShareProps = {
		productCategory,
		co2Saved: CO2Footprint.total.toFixed(2),
		litersOfWaterSaved: waterFootprint.total.toFixed(1),
		eqCO2KmByCar: eqCO2KmByCar.toFixed(2),
		eqDaysDrinkWater: eqDaysDrinkWater.toFixed(2),
	}

	return (
		<Flex width="100%" justifyContent="center" alignItems="center">
			<FacebookShare {...socialMediaShareProps} />
			<WhatsappShare {...socialMediaShareProps} />
			<TwitterShare {...socialMediaShareProps} />
			<LinkedinShare {...socialMediaShareProps} />
		</Flex>
	)
}

export default SocialMediaShareButtons
