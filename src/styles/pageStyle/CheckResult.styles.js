import styled, { css } from "styled-components"

export const CountryWrap = styled.article`
flex: 1;
`;
export const Content = styled.div`
			background: url(${({ image }) => image});
			background-repeat: no-repeat;
			background-size: cover;
			width: 100%;
			max-width: 321px;
			font-size: 16px;
			margin: 0 auto;
			margin-top: 140px;
			
		`

export const Item = styled.div`
	width: 100%;
	max-width: 230px;
	margin: 0 auto;
	text-align: center;
	padding: 40px 10px 15px 10px;
	p {
		color: #323536;
		font-size: 20px;
		
		font-weight: bold;
	}
`

export const Items = styled.div`
	padding-bottom: 20px;

`

export const BtnWrap = styled.div`
	font-size: 14px;
	padding-top: 14px;
`

export const BtnItem = styled.button`
			all: unset;
			background: ${({ theme }) => theme.colors.black0};
			border-radius: 2px;
			color: #f4f1f0;
			text-transform: uppercase;
			padding: 15px;
			cursor: pointer;
			
			${props => props.disable ? 
			
			(css`
					background: #98999a;
					
			`) : null
			}

		`
export const ImgWrap = styled.div`
	img {
		object-fit: cover;
		width:100%;
	}
`;
