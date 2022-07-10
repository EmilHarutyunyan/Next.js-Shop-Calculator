// Third-party imports
import styled from "styled-components"
import { space, layout } from "styled-system"

// Global imports
import { Flex, Fixed } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const StyledButton = styled.button`
	margin-top: 20px;
	text-transform: uppercase;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 25px;
	font-weight: 500;
	font-size: 10px;
	font-family: ${({ theme }) => theme.fonts.family.primary};
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.black};
	border: 1px solid ${({ theme }) => theme.colors.pureBlack};
	border-radius: 10px;
	transition: background-color ease 0.3s;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		height: 25px;
		font-size: 12px;
	}

	${space}
	${layout}
`
export const RetakeButtonContainer = styled(Flex)`
	width: 100%;
	justify-content: center;
	align-items: center;
	margin: 25px;
`
