// Third-party imports
import styled from "styled-components"

// Global imports
import { Flex, Text } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const FootprintIntroductionContainer = styled(Flex)`
	width: 330px;
	max-width: 100%;
	padding-left: 10px;
	padding-right: 10px;
	height: 100px;
	margin-top: 40px;
	margin-bottom: 40px;
	/* border: 1px solid red; */
	color: ${({ theme }) => theme.colors.black0};
	justify-content: center;
	align-items: center;
`

export const FootprintIntroductionText = styled(Text)`
	text-align: center;
	font-weight: bold;
`
