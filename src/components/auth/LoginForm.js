// Third-party imports
import React, { useEffect, useState } from "react"
import { Formik, useField } from "formik"
import { useSelector, useDispatch } from "react-redux"
import Link from "next/link"

// Global imports
import { AuthSchema } from "@/lib/yup"
import { authActions } from "@/redux/actions"

import { SubmitButton, StyledForm, FormikTextInput } from "@/components/forms"
import { useRouter } from "next/router"
import AuthError from "./AuthError"

// Local imports

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

/**
 * @description In JavaScript code that is running both on the server and on the client (browser),
 * it is common practice to guard against with an if clause that checks if window is defined.
 * @param {Object} window  Is the root object provided by the browser for all the APIs that are provided by the browser.
 */
const checkWindowStatus = window => window !== "undefined"

/**
 * @function LoginForm
 * @category Components
 * @subcategory ?
 * @description ?
 */
const Login = ({ onSubmit: onAuthSubmit, error }) => {
	const router = useRouter()
	const dispatch = useDispatch()
	const { _id } = useSelector(({ auth }) => auth)

	const formikProps = {
		validateOnChange: true,
		validateOnBlur: false,
		validateOnSubmit: true,
		...AuthSchema,
		onSubmit: onAuthSubmit,
	}

	const submitButtonProps = {
		width: { _: "250px", sm: "300px" },
		label: "Sign In",
	}

	// useEffect(() => {
	// 	const token = checkWindowStatus(typeof window) && localStorage.getItem("JWTToken")
	// 	dispatch(authActions.getUser(token))
	// 	if (_id) {
	// 		router.push("/")
	// 	}
	// }, [dispatch])

	return (
		<Formik {...formikProps}>
			<StyledForm>
				<FormikTextInput {...emailProps} withLabel={true} />
				<FormikTextInput {...passwordProps} withLabel={true} />
				{error && <AuthError error={error} />}
				<SubmitButton {...submitButtonProps} />
				<p
					style={{
						color: "grey",
						fontSize: "0.7em",
						textAlign: "center",
						fontFamily: "Basic Sans",
					}}
				>
					Don't have an Staiy account? <Link href="/register">Register</Link>{" "}
				</p>
			</StyledForm>
		</Formik>
	)
}

export default Login
