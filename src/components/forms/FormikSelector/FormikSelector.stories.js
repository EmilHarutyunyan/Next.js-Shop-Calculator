// Third-party imports
import React from "react"
import { storiesOf } from "@storybook/react"
import { Formik } from "formik"
import { action } from "@storybook/addon-actions"
import centered from "@storybook/addon-centered/react"
import * as Yup from "yup"
import { delay } from "lodash"

// Global imports
import { Flex } from "@/components/generic"
import { countries } from "@lib"

// Local imports
import FormikSelector from "./FormikSelector"
import SubmitButton from "../SubmitButton"
import { StyledForm } from "../styles"

////////////////////////////////////////////////////////////////////////////////

const selectProps = {
	name: "country",
	placeholder: "Country*",
	options: countries,
	onChange: value => action("Selected new value!")(value),
}

const onStorybookFormikSubmit = (values, { setSubmitting }) => {
	action("Form submitted")(JSON.stringify(values))
	delay(setSubmitting, 2000, false)
}

const formikProps = {
	validateOnChange: false,
	validateOnBlur: true,
	validateOnSubmit: true,
	initialValues: {
		country: "",
	},
	validationSchema: Yup.object({
		country: Yup.string()
			.required("Country is required.")
			.oneOf(
				countries.map(country => country.value),
				"Select one of the options."
			),
	}),
	onSubmit: onStorybookFormikSubmit,
}

storiesOf("Components|Checkout/inputs/FormikSelector", module)
	.addDecorator(Story => (
		<Flex padding="50px" minWidth="350px" bg="white">
			<Story />
		</Flex>
	))
	.addDecorator(centered)
	.add("default", () => (
		<Formik {...formikProps}>
			<StyledForm>
				<FormikSelector {...selectProps} />
				<SubmitButton label="Submit" marginTop="20px" />
			</StyledForm>
		</Formik>
	))
