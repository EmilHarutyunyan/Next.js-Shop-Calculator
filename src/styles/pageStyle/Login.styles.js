import styled from "styled-components"

export const LoginWrap = styled.div`
	padding-top: 90px;
`
export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.black0};
	font-size: 30px;
	line-height: 36px;
	font-weight: 500;
	font-family: "Tiempos";
	letter-spacing: 0px;
	margin: 0;
	padding: 0;
`
export const Desc = styled.h6`
	margin: 0;
	padding: 0;
	margin-top: 19px;
	font-size: 14px;
	line-height: 23px;
`

export const Form = styled.form`
	margin-top: 32px;
`

export const InputItem = styled.div`
			:first-child {
				margin-bottom: 16px;
			}
			input {
				all: unset;
				background: #ffffff;

				padding: 11px 0 12px 16px;
				font-size: 20px;
				line-height: 24px;
				color: ${({ theme }) => theme.colors.black0};
				box-shadow: 0px 5px 12px #c6beb2cc;
			}
			input::placeholder {
				color: #c6beb2;
			}
			button {
				all: unset;
				background-color: ${({ theme }) => theme.colors.black0};
				color: #f4f1f0;
				font-weight: bold;
				font-size: 14px;
				line-height: 17px;
				padding: 15px;
				border-radius: 2px;
				text-transform: uppercase;
				cursor: pointer;
				transition: all 0.3s ease-in;
				:hover {
					opacity: 0.9;
				}
				margin-right:20px;
			}
			&.login-submit {
				margin-top: 40px;
			}
		`
export const Error = styled.p`
	color: red;
	margin: 0;
	padding: 0;
`
