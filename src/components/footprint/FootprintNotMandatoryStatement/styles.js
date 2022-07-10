// Third-party imports
import styled from "styled-components"

// Global imports
import { Flex, Text } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const FootprintNotMandatoryStatementContainer = styled(Flex)`
	margin-bottom: 20px;
	line-height: 1.25;
`

export const FootprintNotMandatoryStatementText = styled(Text)`
	text-align: justify;
	font-size: 0.53em;
	font-family: Basic Sans;
	color: ${({ theme }) => theme.colors.grey3};
`
