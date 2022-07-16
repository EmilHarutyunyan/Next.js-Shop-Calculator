import styled from "styled-components";

export const ResultsWrap = styled.div`
	flex: 1;
`
export const Title = styled.h1`
	color: #323536;
	font-size: 30px;
	line-height: 36px;
	font-family: "Tiempos";
	margin-top: 63px;
`
export const InfTex = styled.h3`
	font-weight: bold;
	font-size: 20px;
	line-height: 24px;
	margin-top: 38px;
`;
export const InfItem = styled.div``;

export const InfItems = styled.div`
	position: relative;
	display: flex;
	align-items: flex-end;
	justify-content: flex-start;
	@media only screen and (max-width: 768px) {
		justify-content: flex-start;
	}
	:first-child {
		align-items: flex-start;
	}
	@media only screen and (max-width: 600px) {
		flex-wrap:wrap
	}
	@media only screen and (max-width: 425px) {
		flex-direction: column;
		justify-content: center;
	}
`

export const Equa = styled.div`
	/* display: inline-block; */

	@media only screen and (max-width: 600px) {
		margin: 0 auto;
		margin-top: 25px;
	}
	.equa-text {
		display: flex;
		align-items: center;
		padding: 0px 8px;
		background-color: #86bdc0;
		color: #fff;
		font-size: 14px;
		width: 115px;
		height: 115px;
		text-align: center;
		border-radius: 50%;
		:first-child {
			width: 135px;
			height: 135px;
		}
		p {
			font-style: italic;
			padding: 8px;
		}
	}
	.equa-img {
		text-align: right;
		margin-top: -8px;
	}
`
export const RegBlock = styled.div`
	background-color: #fff;
	padding: 50px 50px 50px 30px;
	width: 100%;
	max-width: 608px;
	margin-top: 50px;
	margin-bottom: 100px;
	box-shadow: 0px 0px 15px #00000099;

	button {
		all: unset;
		background-color: #323536;
		color: #f4f1f0;
		font-weight: bold;
		font-size: 14px;
		line-height: 17px;
		padding: 15px;
		border-radius: 2px;
		text-transform: uppercase;
		cursor: pointer;
		-webkit-transition: all 0.3s ease-in;
		transition: all 0.3s ease-in;
		margin-top: 50px;
	}
`
export const RegItem = styled.div`
	
`;
export const BtnItem = styled.div`
			text-align:center;
			margin-bottom:60px;
			button {
			all: unset;
			border: 2px solid #323536;
			border-radius: 2px;
			color: #323536;
			padding: 15px;
			cursor: pointer;
			font-weight: bold;
			}
`;