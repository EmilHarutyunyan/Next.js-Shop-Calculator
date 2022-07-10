import styled from "styled-components"

export const Wrapper = styled.article`
	display: flex;
	flex-wrap: wrap;
	column-gap: 24px;
	row-gap: 24px;
	@media only screen and (max-width: 768px) {
		column-gap: 16px;
		row-gap: 16px;
	}
`

export const Items = styled.div`
	transition: all 0.3s ease-in;
	&.no-active {
		filter: brightness(0.5);
	}
`

export const Item = styled.div`
	background: #ffffff;
	box-shadow: 0px 0px 15px #32353699;
	border-radius: 2px;

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
		object-fit: cover;
		margin-bottom: 11px;
	}
`
export const AddText = styled.div`
	font-weight: 600;
	text-transform: capitalize;
`
