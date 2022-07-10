import styled from "styled-components"

export const Cards = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 85px;
	@media only screen and (max-width: 768px) {
		justify-content: center;
		margin-top: 46px;
		flex-direction: column;
		align-items: center;
	}
`
export const Card = styled.div`
	text-align: center;
	width: 100%;
	max-width: 296px;
	padding-bottom: 40px;
`
export const CardIcon = styled.div`
	img {
		display: block;
		object-fit: cover;
		margin: 0 auto;
	}
`
export const CardInfo = styled.div`
	margin-top: 18px;
	p {
		margin: 0;
		font-family: "Tiempos";
		font-size: 30px;
		line-height: 36px;
		font-weight: 500;
	}
`

export const CardText = styled.div`
	p {
		margin: 0;
		font-family: "Tiempos";
		font-size: 14px;
		line-height: 22px;
		font-weight: 400;
	}
`
