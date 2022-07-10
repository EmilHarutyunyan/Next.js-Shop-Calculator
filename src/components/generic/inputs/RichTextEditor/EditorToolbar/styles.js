// Third-party imports
import styled from "styled-components"

// Global imports
import { Flex } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const ToolbarItem = styled(Flex)`
	width: 28px;
	height: 27px;
	justify-content: center;
	align-items: center;
	margin-left: 4px;
	background-color: none;
	border-radius: 5px;
	transition: all 250ms ease-in-out;
	cursor: pointer;
	${({ isBIUStyleActive, theme }) =>
		isBIUStyleActive &&
		` 
			transform: translateY(1px);
    		background-color: ${theme.colors.black};
		`}

	&:hover {
		transform: translateY(1px);
		color: ${({ theme }) => theme.colors.darkGray};
		background-color: ${({ theme }) => theme.colors.lightBlack};
		box-shadow: none;
	}
`

export const ToolbarContainer = styled(Flex)`
	background-color: ${({ theme }) => theme.colors.heavyGray};
	flex-direction: row;
	width: 100%;
	min-height: 50px;
	align-items: center;
	padding: 5px 7px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`
