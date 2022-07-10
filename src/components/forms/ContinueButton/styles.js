// Third-party imports
import styled from "styled-components"
import { space, layout } from "styled-system"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const StyledButton = styled.button`
	margin-top: 20px;
	text-transform: uppercase;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 30px;
	font-weight: 600;
	font-size: 11px;
	font-family: ${({ theme }) => theme.fonts.family.primary};
	background-color: ${({ theme }) => theme.colors.white};
	color: ${({ theme }) => theme.colors.black};
	border: 1px solid ${({ theme }) => theme.colors.pureBlack};
	transition: background-color ease 0.3s;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		height: 25px;
		font-size: 12px;
	}

	&:disabled {
		background-color: #f3f0ef;
	}

	${space}
	${layout}
`
