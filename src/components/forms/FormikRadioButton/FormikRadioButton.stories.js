// Third-party imports
import React from "react"
import { Formik } from "formik"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import centered from "@storybook/addon-centered/react"
import { withKnobs, select } from "@storybook/addon-knobs"
import { delay } from "lodash"

// Global imports
import { Flex } from "@/components/generic"
import { RadioButtonGrid } from "@/components/newCheckout/forms/PaymentMethodForm"
import { paymentMethodSchema } from "@lib/yup"
import SubmitButton from "../SubmitButton"

// Local imports
import FormikRadioButton from "./FormikRadioButton"
import paymentOptions from "./paymentOptions.json"
import { StyledForm } from "../styles"

////////////////////////////////////////////////////////////////////////////////

const onStorybookFormikSubmit = (values, { setSubmitting }) => {
	action("Form submitted")(JSON.stringify(values))
	delay(setSubmitting, 2000, false)
}

const formikProps = {
	...paymentMethodSchema,
	onSubmit: onStorybookFormikSubmit,
}

const onChange = value => action("Payment method selected")(value)

storiesOf("Components|Checkout/inputs/FormikRadioButton", module)
	.addDecorator(Story => (
		<Flex padding="50px" minWidth="450px" bg="white">
			<Story />
		</Flex>
	))
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add("Example radio button (credit card)", () => {
		// Props
		const creditCardProps = {
			width: "100%",
			name: "paymentMethod",
			...paymentOptions[select("Payment method", [0, 1, 2, 3, 4, 5, 6], 0)],
			onChange,
		}

		return (
			<Formik {...formikProps}>
				<Flex width="100%" justifyContent="space-between">
					<FormikRadioButton {...creditCardProps} />
				</Flex>
			</Formik>
		)
	})
	.add("Payment form", () => {
		// Props
		const formikRadioButtonProps = paymentMethodProps => ({
			...paymentMethodProps,
			name: "paymentMethod",
			onChange,
		})

		return (
			<Formik {...formikProps}>
				<StyledForm>
					<Flex flexDirection="column" width="100%">
						<RadioButtonGrid>
							{paymentOptions.map(paymentMethodProps => (
								<FormikRadioButton
									key={paymentMethodProps.value}
									{...formikRadioButtonProps(paymentMethodProps)}
								/>
							))}
						</RadioButtonGrid>
						<SubmitButton label="Submit" marginTop="20px" />
					</Flex>
				</StyledForm>
			</Formik>
		)
	})
