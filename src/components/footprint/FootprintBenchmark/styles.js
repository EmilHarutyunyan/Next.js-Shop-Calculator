// Third-party imports
import styled from "styled-components"

// Global imports
import { Flex, Text } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const FootprintBenchmarkContainer = styled.div`
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
	bottom: 0;
`

export const FootprintBenchmarkText = styled(Text)`
	text-align: center;
	font-size: 1em;
`
export const MedalIconContainer = styled(Text)`
	text-align: center;
	font-size: 2em;
`
