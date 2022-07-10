// Third-party imports
import * as Yup from "yup"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const confirmAccountSchema = {
	initialValue: "",
	validationSchema: Yup.number()
		.typeError("The code must be a number")
		.required("Please provide the code sent to your email address"),
}

const confirmAccountEmailSchema = {
	initialValue: "",
	validationSchema: Yup.string().email().required("Please enter your email"),
}

/**
 * @object ConfirmAccountSchema
 * @category Yup
 * @description Schema for the confirm account form.
 */
export const ConfirmAccountSchema = {
	initialValues: {
		confirmAccount: confirmAccountSchema.initialValue,
		emailConfirmAccount: confirmAccountEmailSchema.initialValue,
	},
	validationSchema: Yup.object({
		verificationCode: confirmAccountSchema.validationSchema,
		email: confirmAccountEmailSchema.validationSchema,
	}),
}
