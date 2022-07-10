// Third-party imports
import React, { useEffect, useState } from "react"
import { Formik, useField } from "formik"

// Global imports
import { footprintCalculatorSchema } from "@/lib/yup"
import Plus from "src/components/generic/visuals/Icon/library/plus.svg"
import Info from "src/components/generic/visuals/Icon/library/info.svg"
import Minus from "src/components/generic/visuals/Icon/library/minus.svg"

import {
	SubmitButton,
	StyledForm,
	FormikTextInput,
	FormikSelector,
	FormikCheckbox,
} from "@/components/forms"

// Local imports
import {
	FootprintCalculatorFormContainer,
	SubmitButtonContainer,
	ContinueButtonContainer,
	InfoIconContainer,
} from "./styles"
import ContinueButton from "@/components/forms/ContinueButton"
import { Flex, Text } from "@/components/generic"
import { FootprintNotMandatoryStatement } from "../FootprintNotMandatoryStatement"

////////////////////////////////////////////////////////////////////////////////

const documentArrayToOptions = array =>
	array.map(entry => ({ label: entry.name, value: entry._id }))

const arrayToOptions = array => array.map(value => ({ label: value, value }))

const productGenderProps = {
	options: [
		{ label: "Men", value: "male" },
		{ label: "Women", value: "female" },
		{ label: "Unisex", value: "unisex" },
	],
	label: "Choose the item gender",
	placeholder: "Your product's gender",
	name: "productGender",
}

const itemTypeProps = itemTypes => ({
	options: documentArrayToOptions(itemTypes),
	label: "Choose an item to evaluate",
	placeholder: "Your item type",
	name: "itemType",
})

const productMaterialProps = (materials, index) => ({
	options: documentArrayToOptions(materials),
	label: "Material blend",
	placeholder: "Your material",
	name: `productMaterial[${index}]._id`,
})

const acquisitionDateYearProps = {
	options: Array.from({ length: (2022 - 2000) / 1 + 1 }, (_, i) => 2000 + i * 1)
		.map(r => {
			return { label: r, value: r }
		})
		.sort((a, b) => b.value - a.value),
	label: "Select the year of purchase for your item",
	placeholder: "Item acquisition year",
	name: "acquisitionDateYear",
}

const laundryFrequencyProps = {
	type: "text",
	label: "Yearly laundry frequency",
	placeholder: "Yearly laundry frequency",
	name: "laundryFrequency",
}

const countryOfResidenceSelectorProps = countries => ({
	options: documentArrayToOptions(countries),
	label: " Select the country where you are located",
	placeholder: "Country of residence",
	name: "countryOfResidence",
})

const manufacturingCountrySelectorProps = countries => ({
	options: documentArrayToOptions(countries),
	label: "Choose the 'Made in' location from your product label",
	placeholder: "Manufacturing country",
	name: "manufacturingCountry",
})

const washMachineSettingProps = {
	options: arrayToOptions(["Normal", "Eco", "Quick", "Handwash"]),
	label: "Select the laundry wash mode",
	placeholder: "Washing machine setting",
	// name: "Setting used with your washing machine",
	name: "washMachineSetting",
}

const washMachineTemperatureSettingProps = {
	options: arrayToOptions(["30", "40", "Auto", "60", "90"]),
	label: "Select your temperature of wash",
	placeholder: "Washing machine temperature setting",
	// name: "Temperature used with your washing machine",
	name: "washMachineTemperatureSetting",
}

const dryingMethodProps = {
	options: arrayToOptions(["Air-dried", "Machine-dried"]),
	label: "Select your laundry drying method",
	placeholder: "Drying method",
	name: "dryingMethod",
	// name: "Method used for drying the item",
}

const submitButtonProps = {
	width: { _: "250px", sm: "300px" },
	label: "Calculate your item's footprint!",
}

const skipSectionCheckBoxProps = {
	label: "Skip this section",
	name: "skip",
}

const labelProps = {
	color: "#323536",
	fontSize: "12px",
}
const MainForm = ({
	countries,
	materials,
	itemTypes,
	continueAction,
	continueButtonProps,
	backButtonProps,
}) => {
	const [skip, , { _setValue }] = useField("skip")
	const [productMaterial, , { setValue }] = useField("productMaterial")

	const [totalProportion, setTotalProportion] = useState(0)
	const [totalProportionColor, setTotalProportionColor] = useState("white")

	const [continueButtonStatus, setContinueButtonStatus] = useState(true)

	const addProductMaterialField = () => {
		const current = productMaterial.value
		current.push({ _id: "", proportion: 0 })
		setValue(current)
	}

	const handleRemoveButton = index => {
		if (productMaterial.value.length > 1) {
			const current = productMaterial.value
			current.splice(index, 1)
			setValue(current)
		}
	}

	useEffect(() => {
		setTotalProportion(
			productMaterial.value.map(p => p.proportion).reduce((a, b) => a + b)
		)
		setTotalProportionColor(totalProportion !== 100 ? "#C66F59" : "#73D2B6")
		setContinueButtonStatus(totalProportion !== 100 ? true : false)
	})

	return (
		<FootprintCalculatorFormContainer>
			{!continueAction && (
				<StyledForm>
					<Flex>
						<FormikSelector {...itemTypeProps(itemTypes)} withLabel={true} />
						<InfoIconContainer iconPos="135">
							<Info></Info>
							<div className="info-text">
								Currently you can only evaluate environmental footprint
								for textiles/apparels. Select the item that belongs
								closest to the categories available in the list. If you
								cannot find a category to relate to your product item,
								leave feedback. We are continuously working on including
								more items into our item category list. We will come up
								with other items in the future.
							</div>
						</InfoIconContainer>
					</Flex>
					<Flex>
						<FormikSelector
							{...manufacturingCountrySelectorProps(countries)}
							withLabel={true}
						/>
						<InfoIconContainer iconPos="0">
							<Info></Info>
							<div className="info-text">
								Select the country that is shown on the item label. This
								is the location where your item was manufactured. If the
								location you are looking for is not available, leave us
								feedback.
							</div>
						</InfoIconContainer>
					</Flex>
					<Flex>
						<FormikSelector {...productGenderProps} withLabel={true} />
						<InfoIconContainer iconPos="150">
							<Info></Info>
							<div className="info-text">
								The item's weight varies depending on the gender it
								belongs to. Hence, specifying the gender helps us to show
								you more accurate results specific to your item. Select
								the gender of the person who uses this item. If you cannot
								identify, or if it is an unisex item then select Unisex
							</div>
						</InfoIconContainer>
					</Flex>
					<Flex>
						<Text {...labelProps}>
							Select the materials blend and its proportion
						</Text>
						<InfoIconContainer iconPos="0">
							<Info></Info>
							<div className="info-text">
								Material blend is the composition of different types of
								materials that your item is made up of. This information
								can be found on the item's label. In the drop down menu
								select a material and then enter the respective percentage
								composition in the text box. Use the '+' icon to add the
								remaining materials and '-' to delete. Different materials
								have varying impact on the environment due to the
								different techniques used in cultivation and
								manufacturing. If your item has more than 3 blends
								mentioned on the label, leave us feedback with a picture
							</div>
						</InfoIconContainer>
						<button
							style={{
								margin: "0 0 0 2px",
								padding: "0",
								border: "none",
								background: "none",
							}}
							type="button"
							onClick={addProductMaterialField}
						>
							<Plus></Plus>
							<span></span>
						</button>
					</Flex>

					{productMaterial.value.map(({ _id, distribution }, index) => {
						if (index < 3) {
							return (
								<div>
									<Flex>
										<FormikSelector
											{...productMaterialProps(materials, index)}
											withLabel={false}
										/>
										<div style={{ width: "15px" }}></div>
										<FormikTextInput
											withLabel={false}
											name={`productMaterial[${index}].proportion`}
											label="Select the proportion"
											placeholder="Between 1 and 100%"
											options={{ max: 100, min: 0, step: 10 }}
											type="number"
										/>
										<button
											type="button"
											style={{
												margin: "9px 0 0 0",
												width: "60px",
												padding: "0",
												border: "none",
												background: "none",
											}}
											onClick={() => handleRemoveButton(index)}
										>
											<Minus></Minus>
										</button>
									</Flex>
								</div>
							)
						}
					})}

					<Text {...labelProps} color={totalProportionColor} fontSize="10px">
						Total proportion: {totalProportion || 0}
					</Text>

					<ContinueButtonContainer>
						<ContinueButton
							{...continueButtonProps}
							disabled={continueButtonStatus}
						></ContinueButton>
					</ContinueButtonContainer>
				</StyledForm>
			)}
			{continueAction && (
				<StyledForm>
					<Flex>
						<FormikCheckbox {...skipSectionCheckBoxProps} withLabel={true} />
						<FootprintNotMandatoryStatement>
							This section is not mandatory to obtain results for your
							item's footprint. You can use the checkbox to skip this
							section and only calculate the footprint of the product,
							without considering your laundry's impact.
						</FootprintNotMandatoryStatement>
					</Flex>

					<Flex>
						<FormikSelector
							{...acquisitionDateYearProps}
							disabled={skip.value}
							withLabel={true}
						/>
						<InfoIconContainer iconPos="68">
							<Info></Info>
							<div className="info-text">
								Choose the approximate year when the item was acquired.
								This helps in taking into consideration the time that has
								passed since then, and account for the total impact on the
								environment from washing and drying activity
							</div>
						</InfoIconContainer>
					</Flex>
					<Flex>
						<FormikSelector
							{...countryOfResidenceSelectorProps(countries)}
							disabled={skip.value}
							withLabel={true}
						/>
						<InfoIconContainer iconPos="66">
							<Info></Info>
							<div className="info-text">
								If you have moved between countries since you acquired the
								item, then select the country where you used the item for
								majority of the time period. This information helps us in
								taking into consideration the geographical reference while
								calculating the footprint of your item's laundry.
							</div>
						</InfoIconContainer>
					</Flex>
					<Flex>
						<FormikTextInput
							{...laundryFrequencyProps}
							disabled={skip.value}
							withLabel={true}
						/>
						<InfoIconContainer iconPos="150">
							<Info></Info>
							<div className="info-text">
								Here enter the number of times you wear and do the laundry
								for this item
							</div>
						</InfoIconContainer>
					</Flex>
					<Flex>
						<FormikSelector
							{...washMachineSettingProps}
							disabled={skip.value}
							withLabel={true}
						/>
						<InfoIconContainer iconPos="120">
							<Info></Info>
							<div className="info-text">
								Based on the mode that you use to do laundry for this
								item, select the appropriate washing mode. If the washing
								machine mode that you use is not shown or you are unsure,
								then select 'Normal'. If you wash the item by hand, then
								select 'Handwash'.
							</div>
						</InfoIconContainer>
					</Flex>
					<Flex>
						<FormikSelector
							{...washMachineTemperatureSettingProps}
							disabled={skip.value}
							withLabel={true}
						/>
						<InfoIconContainer iconPos="110">
							<Info></Info>
							<div className="info-text">
								If your washing machine has a setting for selecting the
								temperature, choose the temperature from the options
								shown. If you do not have this setting in your machine or
								you are not sure then select 'Auto'.
							</div>
						</InfoIconContainer>
					</Flex>
					<Flex>
						<FormikSelector
							{...dryingMethodProps}
							disabled={skip.value}
							withLabel={true}
						/>
						<InfoIconContainer iconPos="100">
							<Info></Info>
							<div className="info-text">
								If you use a separate drier machine to dry your laundry,
								then select 'Machine dried'. If you use drying racks,
								lines or dry it with any other method other than a
								machine, then select 'Air dried'.
							</div>
						</InfoIconContainer>
					</Flex>

					<ContinueButtonContainer>
						<ContinueButton {...backButtonProps}></ContinueButton>
					</ContinueButtonContainer>

					<SubmitButtonContainer>
						<SubmitButton {...submitButtonProps} />
					</SubmitButtonContainer>
				</StyledForm>
			)}
		</FootprintCalculatorFormContainer>
	)
}

/**
 * @function FootprintCalculatorForm
 * @category Components
 * @subcategory ?
 * @description ?
 * @param {Function} onSubmit - Function to call when the form is submitted.
 */
const FootprintCalculatorForm = ({
	onSubmit: onFootPrintCalculationSubmit,
	countries,
	itemTypes,
	materials,
}) => {
	const formikProps = {
		validateOnChange: true,
		validateOnBlur: false,
		validateOnSubmit: true,
		...footprintCalculatorSchema,
		onSubmit: onFootPrintCalculationSubmit,
	}

	const [continueAction, setContinueAction] = useState(false)

	const handleContinue = () => {
		setContinueAction(!continueAction)
	}

	const continueButtonProps = {
		width: { _: "250px", sm: "300px" },
		label: "Continue",
		action: handleContinue,
	}

	const backButtonProps = {
		width: { _: "250px", sm: "300px" },
		label: "Go back",
		action: handleContinue,
	}

	return (
		<Formik {...formikProps}>
			<MainForm
				onSubmit
				countries={countries}
				itemTypes={itemTypes}
				materials={materials}
				continueAction={continueAction}
				continueButtonProps={continueButtonProps}
				backButtonProps={backButtonProps}
			/>
		</Formik>
	)
}

export default FootprintCalculatorForm
