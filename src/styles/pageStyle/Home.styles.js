import styled from "styled-components"

export const HomeLayout = styled.div`
	flex:1;
`
export const HomeWrap = styled.div`
	padding-top: 99px;
	width: 100%;
	max-width: 968px;
	margin: 0 auto;
	text-align: center;
	@media only screen and (max-width: 768px) {
		padding-top: 50px;
	}
`
export const HomeInfo = styled.div`
	width: 100%;
	max-width: 608px;
	margin: 0 auto;
	text-align: center;
	@media only screen and (max-width: 768px) {
		text-align: left;
	}
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
export const Desc = styled.h2`
	color: ${({ theme }) => theme.colors.black0};
	margin: 0;
	padding: 0;
	margin-top: 20px;
	font-size: 20px;
	line-height: 24px;
	font-weight: bold;
	margin-top: 20px;
`
export const Text = styled.p`
	font-family: "Tiempos";
	color: ${({ theme }) => theme.colors.black0};
	margin: 0;
	padding: 0;
	margin-top: 45px;
	font-size: 14px;
	line-height: 22px;
`
export const BtnWrap = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 300px;
	margin: 0 auto;
	justify-content: space-between;
	margin-top: 85px;
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
export const Footer = styled.div`
	font-size: 10px;
	font-family: "Tiempos";
	text-align: center;
	margin-bottom: 40px;
	@media only screen and (max-width: 768px) {
		margin-top: 50px;
		margin-bottom:0
	}
`
