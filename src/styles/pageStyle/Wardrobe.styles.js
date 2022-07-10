import styled from "styled-components"
export const WardrobeWrap = styled.div`
	margin-top: 99px;
	flex:1;
	@media only screen and (max-width: 768px) {
		margin-top: 50px;
	}
	h1 {
		margin-bottom: 70px;
	}
`
export const Title = styled.h1`
	font-size: 30px;
	line-height: 36px;
	color: #fff;
	font-family: "Tiempons";
	text-shadow: 0px 2px 2px #00000099;
`
export const CardWrap = styled.div`
	display:flex;
	flex-direction: column;

`
export const CardContent = styled.div`
	display:flex;
	align-items:center;
	margin-top:20px;
	column-gap:20px;
	.wardrobe-card {
		margin-right:20px;
	}
`;

export const BtnItem = styled.div`
			text-transform: uppercase;
			font-weight: bold;
			font-size: 14px;
			width: 100%;
			text-align: center;
			margin-bottom:40px;
			
		`
export const BtnOne = styled.button`
			all: unset;
			border: 1px solid ${({ theme }) => theme.colors.black0};
			border-radius: 2px;
			color: ${({ theme }) => theme.colors.black0};
			padding: 15px;
			cursor: pointer;
		`
export const CardInfo = styled.div`
	background-color:#fff;
padding:20px 65px 20px 30px;
`;