// Third-party imports
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

// Global imports
import StartButton from "@/components/forms/StartButton"

// Local imports
import {
	FootprintMainTitle,
	FootprintMainTitleContainer,
	FootprintSubtitleContainer,
	FootprintSubTitle,
	FootprintIntroductoryText,
	FootprintIntroductoryTextContainer,
} from "./styles"

import AuthForm from "@/components/auth/AuthForm"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function FootprintIntroduction
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {Function} onSubmit - Function to call when the form is submitted.
 */
const FootprintPreForm = ({ action, setNotCompleted }) => {
	const dispatch = useDispatch()

	const authFormProps = {
		onSubmit: async values => {
			dispatch(formFieldsActions.calculateFootprint(values))
		},
	}

	useEffect(() => {
		/** Since we are in the intro again when retaking, we set the form as not completed */
		setNotCompleted()
	})

	return (
		<>
			<FootprintMainTitleContainer>
				<FootprintMainTitle>
					Calculate your fashion items’ footprint with our footprint Calculator!
				</FootprintMainTitle>
			</FootprintMainTitleContainer>
			<FootprintSubtitleContainer>
				<FootprintSubTitle>
					Find out how much your item consumes in terms of liters of water and
					kilograms of CO₂ emissions
				</FootprintSubTitle>
			</FootprintSubtitleContainer>

			<div style={{ width: "200px" }}>
				<StartButton label={"Start"} action={action} />
			</div>

			<FootprintIntroductoryTextContainer>
				<FootprintIntroductoryText>
					<hr style={{ postition: "relative" }}></hr>
					<a style={{ fontStyle: "italic", fontWeight: "600" }}>
						Did you know that?
					</a>{" "}
					<br /> • Fashion is the Second most polluting industry in the world{" "}
					<br /> • Every year fashion releases Green House Gases equivalent to
					driving 4 Trillion Kilometers* by an average gasoline-powered
					passenger vehicle <br /> • Each year fashion consumes water which is
					sufficient to satisfy Global human drinking water needs for 14 years*{" "}
					<br /> • 412 Billion Euros* worth of fashion waste is generated
					annually
					<br />
					<div
						style={{
							fontStyle: "italic",
							fontWeight: "600",
							marginTop: "25px",
							marginBottom: "25px",
						}}
					>
						It's difficult as consumers to realize the impact of our clothes
						due to little transparency, our aim is to raise awareness and help
						you with data-driven information to make better choices.
					</div>
					<div
						style={{
							fontStyle: "italic",
							fontSize: "0.75em",
							marginBottom: "2px",
						}}
					>
						<p style={{ textAlign: "center" }}>
							* These values are close estimates calculated through
							different reports and calculators.
						</p>
					</div>
				</FootprintIntroductoryText>
			</FootprintIntroductoryTextContainer>
		</>
	)
}

export default FootprintPreForm
