// Third-party imports
import React from "react"
import { storiesOf } from "@storybook/react"
import { withKnobs, boolean, text } from "@storybook/addon-knobs"
import centered from "@storybook/addon-centered/react"
import { Formik } from "formik"
import * as Yup from "yup"
import { delay } from "lodash"

// Global imports
import { Flex } from "@/components/generic"
import { firstNameSchema } from "@lib/yup/inputs"

// Local imports
import { action } from "@storybook/addon-actions"
import FormikTextInput from "../FormikTextInput"
import SubmitButton from "./SubmitButton"
import { StyledForm } from "../styles"

////////////////////////////////////////////////////////////////////////////////

const textInputProps = {
	type: "text",
	name: "firstName",
	placeholder: "First name",
}

const onStorybookFormikSubmit = (values, { setSubmitting }) => {
	action("Form submitted")(JSON.stringify(values))
	delay(setSubmitting, 2000, false)
}

storiesOf("Components|Checkout/inputs/SubmitButton", module)
	.addDecorator(Story => (
		<Flex padding="50px" minWidth="350px" bg="white" flexDirection="column">
			<Story />
		</Flex>
	))
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add("default", () => {
		// Props
		const formikProps = {
			validateOnChange: boolean("Validate on change", false),
			validateOnBlur: boolean("Validate on blur", true),
			validateOnSubmit: boolean("Validate on submit", true),
			initialValues: {
				firstName: firstNameSchema.initialValue,
			},
			validationSchema: Yup.object({
				firstName: firstNameSchema.validationSchema,
			}),
			onSubmit: onStorybookFormikSubmit,
		}

		return (
			<Formik {...formikProps}>
				<StyledForm>
					<FormikTextInput {...textInputProps} />
					<SubmitButton label={text("Button label", "Submit")} />
				</StyledForm>
			</Formik>
		)
	})
