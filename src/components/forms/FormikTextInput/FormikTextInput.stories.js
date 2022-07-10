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
import { firstNameSchema, lastNameSchema, emailSchema } from "@lib/yup/inputs"

// Local imports
import FormikTextInput from "./FormikTextInput"
import SubmitButton from "../SubmitButton"
import { StyledForm } from "../styles"

////////////////////////////////////////////////////////////////////////////////

const textInputProps = {
	firstName: {
		type: "text",
		name: "firstName",
		placeholder: "First name",
	},
	lastName: {
		type: "text",
		name: "lastName",
		placeholder: "Last name",
	},
	email: {
		type: "email",
		id: "email",
		name: "email",
		placeholder: "Email",
	},
}

const onStorybookFormikSubmit = (values, { setSubmitting }) => {
	action("Form submitted")(JSON.stringify(values))
	delay(setSubmitting, 2000, false)
}

const formikInputSchema = {
	firstName: firstNameSchema,
	lastName: lastNameSchema,
	email: emailSchema,
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

storiesOf("Components|Checkout/inputs/FormikTextInput", module)
	.addDecorator(Story => (
		<Flex padding="50px" minWidth="350px" bg="white">
			<Story />
		</Flex>
	))
	.addDecorator(centered)
	.add("first name", () => (
		<Formik {...formikProps("firstName")}>
			<StyledForm>
				<FormikTextInput {...textInputProps.firstName} />
				<SubmitButton label="Submit" marginTop="20px" />
			</StyledForm>
		</Formik>
	))
	.add("last name", () => (
		<Formik {...formikProps("lastName")}>
			<StyledForm>
				<FormikTextInput {...textInputProps.lastName} />
				<SubmitButton label="Submit" marginTop="20px" />
			</StyledForm>
		</Formik>
	))
	.add("email", () => (
		<Formik {...formikProps("email")}>
			<StyledForm>
				<FormikTextInput {...textInputProps.email} />
				<SubmitButton label="Submit" marginTop="20px" />
			</StyledForm>
		</Formik>
	))
