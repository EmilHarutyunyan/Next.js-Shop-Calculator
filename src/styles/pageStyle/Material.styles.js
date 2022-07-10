import styled from "styled-components"

export const MaterialLayout = styled.div`
	flex:1;
`;
export const MaterialWrap = styled.div`
	display: flex;
	align-items: center;
	margin-top: 55px;
	justify-content: center;
	flex-wrap: wrap;
`
export const MaterialItem = styled.div`
			flex-basis: calc(100% / 1);
		`
export const Pricent = styled.div`
	background-color: #fff;
	width: 100%;
	max-width: 140px;
	min-height: 130px;
	box-shadow: 0px 0px 8px #323536;
	border-radius: 2px;
	text-align: center;
	input {
		outline: none;
		border: none;
		width: 100%;
		font-size: 80px;
		text-align: center;
		color: #323536;
	}
`

export const Count = styled.div`
			font-family: "Tiempos";
			font-size: 30px;
			line-height: 36px;
			color: #fff;
			margin-top: 50px;
		`

export const MaterialContetn = styled.div`
			display: flex;
			align-items: flex;
			max-width: 600px;
			width: 100%;
			justify-content: space-between;
			margin: 0 auto;
		`

export const ActionBtn = styled.div``

export const Content = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	max-width: 530px;
	justify-content: space-between;
`

export const Items = styled.div``

export const Item = styled.div`
			background: #fff;
			border: 1px solid #ffffff;
			border-radius: 2px;
			color: #323536;
			width: ${props => props.width || "140px"};
			height: ${props => props.height || "130px"};
			text-align: center;
			cursor: pointer;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
		`
export const Icon = styled.div`
	img {
		display: block;
		width: 43px;
		object-fit: cover;
		margin-bottom: 23px;
	}
`
export const AddText = styled.div`
	font-size: 16px;
	text-transform: capitalize;
`
