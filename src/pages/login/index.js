import { useState } from "react"
import VideoBanner from "@/components/videoBanner"
import Wrapper from "@/components/wrapper"
import { useRouter } from "next/router"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
const schema = yup.object().shape({
	email: yup
		.string()
		.email("Email should have correct format")
		.required("Email is a required field"),
	password: yup
		.string()
		.required("No password provided.")
		.min(8, "Password is too short - should be 8 chars minimum."),
	// .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})
// Styles
import {
	LoginWrap,
	Title,
	Desc,
	Form,
	InputItem,
	Error,
} from "@/styles/pageStyle/Login.styles"
import { authActions } from "@/redux/actions"
function Login() {
	const [errorMsg, setErrorMsg] = useState(null)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
		// onSubmit
		resolver: yupResolver(schema),
	})

	const router = useRouter()
	const { verifySuccess } = router.query

	const dispatch = useDispatch()

	const {
		signin: { success, pending, error },
	} = useSelector(({ requests }) => requests)

	const { _id } = useSelector(({ auth }) => auth)

	const onSubmit = async data => {
		await dispatch(authActions.signIn(data))
		if (error) {
			setErrorMsg("Your email address or password is not correct")
		}
	}
	
	
	if (success || _id) {
		router.push("/wardrobe")
	}
	return (
		<Wrapper>
			<VideoBanner
				videoSrc={
					"https://footprint-b2c.s3.eu-central-1.amazonaws.com/Textil.mp4"
				}
			/>
			<LoginWrap>
				<Title>Login to enter your Wardrobe.</Title>
				<Desc>
					Please Register to save your footprint results. You’ll find them in
					your Wardrobe in the future. Happy calculating!"
				</Desc>
				{errorMsg && <Error>{errorMsg}</Error>}
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputItem>
						<input {...register("email")} placeholder="Email" />
						{errors.email?.message && <Error>{errors.email?.message}</Error>}
					</InputItem>

					<InputItem>
						<input
							type="password"
							{...register("password")}
							placeholder="Password"
						/>
						{errors.password?.message && (
							<Error>{errors.password?.message}</Error>
						)}
					</InputItem>
					<InputItem className="login-submit">
						<button type="submit">Login</button>
						<button type="button" onClick={() => router.push("/register")}>
							register
						</button>
					</InputItem>
				</Form>
			</LoginWrap>
		</Wrapper>
	)
}
Login.requireAuth = false
export default Login
