import styled, { css } from "styled-components"
// import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt"
// import { transitionMixin } from "../../theme/mixins"

export const paddingHorizontal = "10px"
export const paddingVertical = "5px"
const borderRadius = paddingHorizontal
const elementHeight = "40px"

export const WrapSearch = styled.div`
	position: relative;
	margin-bottom: 20px;
`

export const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	height: ${elementHeight};
`
export const LupeWrap = styled.div`
	position: absolute;
	top: 0;
	right: 2%;
	font-size:30px;
`;

// export const Label =
// 	styled.label <
// 	LabelProps >
// 	`
//   position: absolute;
//   left: 40px;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   line-height: ${elementHeight};
//   font-style: italic;
//   font-size: ${({ labelFloat, theme }) =>
// 		labelFloat ? theme.fontSize.s : theme.fontSize.m};
//   transform: translateY(${({ labelFloat }) => (labelFloat ? "-90%" : "0")});
//   cursor: text;
//   ${transitionMixin({ properties: ["font-size", "transform"] })};
// `

// export const StyledIcon = styled(SearchAlt)`
// 	position: absolute;
// 	left: ${paddingHorizontal};
// 	top: 50%;
// 	bottom: 0;
// 	width: 25px;
// 	transform: translateY(-50%);
// 	cursor: default;
// 	& * {
// 		cursor: default;
// 	}
// `

export const Input = styled.input`
	border: 1px solid #c6beb2;
	border-radius: 10px;
	padding: 8px;
	font-size: 20px;
	width: 100%;
	outline: none;
	color: #323536;
	padding-left: 12px;
	font-weight: bold;
	::placeholder {
		color: #ccc5ba;
	}
`

export const ListContainer = styled.ul`
	width: 200px;
	background-color: #F5F5F5;
	position: absolute;
	top: ${elementHeight};
	left: 0;
	right: 0;
	margin-bottom: 20px;
	list-style: none;
	z-index: 100;
	margin-top: 20px;
	
`

export const StatusText = styled.p`
	padding: ${`${paddingVertical} ${paddingHorizontal}`};
	background: ${({ theme }) => theme.buttonBcgHover};
	border-radius: ${`0 0 ${borderRadius} ${borderRadius}`};
`
