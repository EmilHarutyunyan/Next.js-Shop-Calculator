// Third-party imports
import styled from "styled-components"

// Global imports
import { Flex, Text } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const FootprintIntroductionContainer = styled.div`
	font-size: 0.6em;
	text-align: center;
	width: 860px;
	max-width: 100%;
	padding-left: 10px;
	padding-right: 10px;
	height: 100px;
	/* border: 1px solid red; */
	color: ${({ theme }) => theme.colors.black0};
	justify-content: center;
	align-items: center;
	position: relative;
	margin-top: 50px;
	bottom: 0;
`

export const FootprintIntroductionText = styled(Text)`
	text-align: center;
`
