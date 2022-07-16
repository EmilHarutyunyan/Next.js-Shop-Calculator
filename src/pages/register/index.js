import VideoBanner from "@/components/videoBanner"
import Wrapper from "@/components/wrapper"
import React, { useState,useEffect } from "react"
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux"
import { yupResolver } from "@hookform/resolvers/yup"
import { authActions } from "@/redux/actions"

import * as yup from "yup"
import { useForm } from "react-hook-form"
import {
	Title,
	Desc,
	Form,
	InputItem,
	Error,
	Social,
	RegWrap,
} from "@/styles/pageStyle/Register.styles"

import SocialBtn from "@/components/socialBtn"

const schema = yup.object().shape({
	firstName: yup
		.string()
		.max(40)
		.min(3, "First Name must be at least 3 characters")
		.required("Required First Name"),
	lastName: yup
		.string()
		.max(40)
		.min(3, "Last Name must be at least 3 characters")
		.required("Required Last Name"),
	email: yup
		.string()
		.email("Email should have correct format")
		.required("Email is a required field"),
	password: yup
		.string()
		.required("No password provided.")
		.matches(
			/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
			"Minimum eight characters, at least one letter and one number:"
		),
	// .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})

function Register() {
	const [errorMsg, setErrorMsg] = useState(null)

	const router = useRouter()

	const dispatch = useDispatch()

	const {
		authenticate: { success, pending,error },
	} = useSelector(({ requests }) => requests)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: "onBlur",
		// onSubmit
		resolver: yupResolver(schema),
	})

	const onSubmit = async data => {
		await dispatch(authActions.authenticate(data))
		localStorage.setItem("reg", JSON.stringify(data))
		if (error) {
			setErrorMsg("User no register")
		}
		// if (success) {
		
			
		// }

	}

	useEffect(()=> {


		if(success){
			reset()
			router.push("/verificate")
		}
	},[success])
	
	return (
		<Wrapper>
			<RegWrap>
				<VideoBanner
					videoSrc={
						"https://footprint-b2c.s3.eu-central-1.amazonaws.com/Textil.mp4"
					}
				/>

				<Title>Register to become a part of staiy!</Title>
				<Desc>
					Please Register to save your footprint results. You’ll find them in
					your Guardrobe in the future. Happy calculating!
				</Desc>
				{errorMsg && <Error>{errorMsg}</Error>}
				<Form onSubmit={handleSubmit(onSubmit)}>
					<InputItem>
						<input {...register("firstName")} placeholder="First name" />
						{errors.firstName?.message && (
							<Error>{errors.firstName?.message}</Error>
						)}
					</InputItem>
					<InputItem>
						<input {...register("lastName")} placeholder="Last name" />
						{errors.lastName?.message && (
							<Error>{errors.lastName?.message}</Error>
						)}
					</InputItem>
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
						<button type="submit">Register</button>
					</InputItem>
				</Form>

				<Social>
					<SocialBtn
						icon={"/static/icons/social/fb_logo.svg"}
						title={"Login with Facebook"}
					/>
					<SocialBtn
						icon={"/static/icons/social/G+_logo.svg"}
						title={"Login with Google"}
					/>
				</Social>
			</RegWrap>
		</Wrapper>
	)
}

export default Register
