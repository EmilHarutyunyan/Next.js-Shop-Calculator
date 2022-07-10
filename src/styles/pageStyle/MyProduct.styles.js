import styled from "styled-components"

export const MyProductWrap = styled.div`
	padding-top: 90px;
`

export const Form = styled.form`
margin-top: 63px;
`

export const InputItem = styled.div`
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
`
export const BtnWrap = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 300px;
	/* margin: 0 auto; */
	justify-content: space-between;
	margin-top: 36px;
`
export const BtnItem = styled.div`
	text-transform: uppercase;
	font-weight: bold;
	font-size: 14px;
`
export const BtnOne = styled.button`
	all: unset;
	border: 1px solid ${({ theme }) => theme.colors.black0};
	border-radius: 2px;
	color: ${({ theme }) => theme.colors.black0};
	padding: 15px;
	cursor: pointer;
`
export const BtnTwo = styled.button`
	all: unset;
	background: ${({ theme }) => theme.colors.black0};
	border-radius: 2px;
	color: #f4f1f0;
	text-transform: uppercase;
	padding: 15px;
	cursor: pointer;
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
	font-weight: 400;
`
