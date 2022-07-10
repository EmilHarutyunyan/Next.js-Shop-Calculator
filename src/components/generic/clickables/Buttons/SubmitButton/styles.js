// Third-party imports
import styled from "styled-components"

// Global imports
import { Flex } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const Button = styled(Flex)`
	/* Flexbox */
	justify-content: center;
	align-items: center;

	/* Positioning */
	padding: 0px 10px;

	/* Dimensions */
	height: 35px;
	width: 100%;

	/* Background */
	background-color: ${({ theme }) => theme.colors.teal};

	/* Text */
	color: ${({ theme }) => theme.colors.white};
	font-weight: 500;
	font-size: 14px;
	text-transform: uppercase;

	/* Animations */
	cursor: pointer;
	transition: 0.2s linear;

	:hover {
		background-color: ${({ theme }) => theme.colors.darkTeal};
		/* color: ${({ theme }) => theme.colors.testColor2}; */
	}
`
