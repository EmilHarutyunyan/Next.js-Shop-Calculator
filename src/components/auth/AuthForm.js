// Third-party imports
import React, { useEffect, useState } from "react"
import { Formik, useField } from "formik"

// Global imports
import { AuthSchema } from "@/lib/yup"
import { SubmitButton, StyledForm, FormikTextInput } from "@/components/forms"

// Local imports
import AuthError from "./AuthError"

////////////////////////////////////////////////////////////////////////////////

const emailProps = {
	type: "text",
	label: "Enter your email",
	placeholder: "Please enter your email",
	name: "email",
}

const passwordProps = {
	type: "password",
	label: "Enter your password",
	placeholder: "Please enter your password",
	name: "password",
}

const confirmPasswordProps = {
	type: "password",
	label: "Confirm your password",
	placeholder: "Please confirm your password",
	name: "confirmPassword",
}

const submitButtonProps = {
	width: { _: "250px", sm: "300px" },
	label: "Sign Up",
}

/**
 * @function AuthForm
 * @category Components
 * @subcategory ?
 * @description ?
 */
const AuthForm = ({ onSubmit: onAuthSubmit, error }) => {
	const formikProps = {
		validateOnChange: false,
		validateOnBlur: false,
		validateOnSubmit: true,
		...AuthSchema,
		onSubmit: onAuthSubmit,
	}
	return (
		<Formik {...formikProps}>
			<StyledForm>
				<FormikTextInput {...emailProps} withLabel={true} />
				<FormikTextInput {...passwordProps} withLabel={true} />
				<FormikTextInput {...confirmPasswordProps} withLabel={true} />
				<AuthError error={error && "Email already exists"} />
				<SubmitButton {...submitButtonProps} />
			</StyledForm>
		</Formik>
	)
}

export default AuthForm
