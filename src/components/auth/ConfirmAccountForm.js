// Third-party imports
import React, { useEffect, useState } from "react"
import { Formik, useField } from "formik"
import { useSelector, useDispatch } from "react-redux"
import Link from "next/link"

// Global imports
import { ConfirmAccountSchema } from "@/lib/yup"
import { authActions } from "@/redux/actions"

import { SubmitButton, StyledForm, FormikTextInput } from "@/components/forms"
import { useRouter } from "next/router"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const confirmAccountProps = {
	type: "text",
	label: "Enter the code",
	placeholder: "Please enter the code",
	name: "verificationCode",
}

const confirmEmailAccountProps = {
	type: "text",
	label: "Enter your email",
	placeholder: "Please enter email",
	name: "email",
}

/**
 * @function ConfirmAccountForm
 * @category Components
 * @subcategory ?
 * @description ?
 */
const ConfirmAccountForm = ({ onSubmit: onConfirmAccountSubmit }) => {
	const router = useRouter()

	const formikProps = {
		validateOnChange: true,
		validateOnBlur: false,
		validateOnSubmit: true,
		...ConfirmAccountSchema,
		onSubmit: onConfirmAccountSubmit,
	}

	const submitButtonProps = {
		width: { _: "250px", sm: "300px" },
		label: "Confirm account",
	}

	return (
		<Formik {...formikProps}>
			<StyledForm>
				<FormikTextInput {...confirmEmailAccountProps} withLabel={true} />
				<FormikTextInput {...confirmAccountProps} withLabel={true} />
				<SubmitButton {...submitButtonProps} />
			</StyledForm>
		</Formik>
	)
}

export default ConfirmAccountForm
