// Third-party imports
import * as Yup from "yup"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const emailSchema = {
	initialValue: "",
	validationSchema: Yup.string().email().required("Please enter your email"),
}

const passwordSchema = {
	initialValue: "",
	validationSchema: Yup.string()
		.required("No password was provided")
		.min(6, "Password is too short, should be 6 chars minimum"),
}

// const confirmPasswordSchema = {
// 	initialValue: "",
// 	validationSchema: Yup.string().oneOf(
// 		[Yup.ref("password"), null],
// 		"Passwords do not match"
// 	),
// }

/**
 * @object AuthSchema
 * @category Yup
 * @description Schema for the auth.
 */
export const AuthSchema = {
	initialValues: {
		email: emailSchema.initialValue,
		password: passwordSchema.initialValue,
		
	},
	validationSchema: Yup.object({
		email: emailSchema.validationSchema,
		password: passwordSchema.validationSchema,
		
	}),
}
