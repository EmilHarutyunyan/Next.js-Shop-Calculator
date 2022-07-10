// Third-party imports
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import centered from "@storybook/addon-centered/react"
import { Formik } from "formik"
import * as Yup from "yup"
import { delay } from "lodash"

// Global imports
import { Flex } from "@/components/generic"
import { newsletterSchema, termsAndConditionsSchema } from "@lib/yup/inputs"

// Local imports
import FormikCheckbox from "./FormikCheckbox"
import SubmitButton from "../SubmitButton"
import { StyledForm } from "../styles"

////////////////////////////////////////////////////////////////////////////////

const formikInputSchema = {
	newsletter: newsletterSchema,
	termsAndConditions: termsAndConditionsSchema,
}

const onStorybookFormikSubmit = (values, { setSubmitting }) => {
	action("Form submitted")(JSON.stringify(values))
	delay(setSubmitting, 2000, false)
}

const formikProps = name => ({
	validateOnChange: false,
	validateOnBlur: true,
	validateOnSubmit: true,
	initialValues: {
		[name]: formikInputSchema[name].initialValue,
	},
	validationSchema: Yup.object({
		[name]: formikInputSchema[name].validationSchema,
	}),
	onSubmit: onStorybookFormikSubmit,
})

const formikCheckboxProps = {
	newsletter: {
		name: "newsletter",
		label: "Subscribe to our newsletter!",
		onChange: value => action("Checkbox clicked")(value),
	},
	termsAndConditions: {
		name: "termsAndConditions",
		label: "<u>I agree to the General Terms and Privacy Policy.</u>*",
		onChange: value => action("Checkbox clicked")(value),
	},
}

storiesOf("Components|Checkout/inputs/FormikCheckbox", module)
	.addDecorator(Story => (
		<Flex padding="50px" minWidth="450px" bg="white">
			<Story />
		</Flex>
	))
	.addDecorator(centered)
	.add("newsletter", () => (
		<Formik {...formikProps("newsletter")}>
			<StyledForm>
				<FormikCheckbox {...formikCheckboxProps.newsletter} />
				<SubmitButton label="Submit" marginTop="20px" />
			</StyledForm>
		</Formik>
	))
	.add("terms and conditions", () => (
		<Formik {...formikProps("termsAndConditions")}>
			<StyledForm>
				<FormikCheckbox {...formikCheckboxProps.termsAndConditions} />
				<SubmitButton label="Submit" marginTop="20px" />
			</StyledForm>
		</Formik>
	))
