// Third-party imports
import styled from "styled-components"
import { animated } from "react-spring"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const DropdownContainer = styled.div`
	box-sizing: border-box;
	width: 100%;
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.darkGray};
	color: ${({ theme }) => theme.colors.white};
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`

export const Header = styled.div`
	display: flex;
	width: 100%;
	padding: 14px;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`
export const ContentContainer = styled(animated.div)`
	padding: 0px 14px;
`
