import styled from "styled-components"

export const SelectWrap = styled.div`
	width: 100%;
	max-width: 218px;

	border-radius: 2px;
	
	color: ${({ theme }) => theme.colors.black0};
	
`
export const SelectHeader = styled.div`
			cursor: pointer;
			display: flex;
			display: flex;
			min-height: 130px;
			align-items: center;
			box-shadow: 0px 0px 15px #323536;
			background-color: #fff;
			img {
				margin-left: 20px;
			}
		`
export const SelectTitle = styled.span`
	font-size: 16px;
	line-height: 24px;
	padding-left: 30px;
	font-weight: bold;
`
export const ImgWrap = styled.div`
	font-size: 0;
`

export const SelectBody = styled.div`
			box-shadow: 0px 5px 12px #323536;
			border-radius: 2px;
			background-color: #fff;
			margin: 17px 0;
			height: 0px;
			overflow: hidden;
			transition: all 0.3s linear;
			visibility: visible;
		`
export const SelectItem = styled.div`
			display: flex;
			margin-left: 12px;
			margin-bottom: 34px;
			
			cursor: pointer;
			:first-child {
				padding-top: 13px;
			}
			:last-child {
				margin-bottom: 0;
				padding-bottom: 20px;
			}
			img {
				width: 100%;
				height: 100%;
				max-width: 30px;
				max-height: 30px;
			}
			p {
				font-size: 16px;
				padding-left: 8px;
			}
		`
export const SelectCustom = styled.div``;