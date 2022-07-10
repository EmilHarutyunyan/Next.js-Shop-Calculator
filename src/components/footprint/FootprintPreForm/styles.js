// Third-party imports
import styled from "styled-components"

// Global imports
import { Flex, Text } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const FootprintMainTitleContainer = styled.div`
	width: 330px;
	max-width: 100%;
	padding-left: 10px;
	padding-right: 10px;
	height: 100px;
	// margin-top: 160px;
	/* margin-bottom: 40px; */
	/* border: 1px solid red; */
	color: ${({ theme }) => theme.colors.black0};
	justify-content: center;
	align-items: center;
	// position: absolute;
	text-align: center;
`

export const FootprintSubtitleContainer = styled.div`
	width: 330px;
	max-width: 100%;
	padding-left: 10px;
	padding-right: 10px;
	height: 100px;
	// margin-top: 2px;
	/* margin-bottom: 40px; */
	/* border: 1px solid red; */
	color: ${({ theme }) => theme.colors.black0};
	justify-content: center;
	align-items: center;
	// position: absolute;
	text-align: center;
`

export const FootprintIntroductoryTextContainer = styled.div`
	width: 660px;
	max-width: 100%;
	padding-left: 10px;
	padding-right: 10px;
	// height: 100px;
	// margin-top: 480px;
	/* margin-bottom: 40px; */
	/* border: 1px solid red; */
	color: ${({ theme }) => theme.colors.black0};
	justify-content: center;
	align-items: center;
	// position: absolute;
	text-align: center;
`

export const FootprintMainTitle = styled(Text)`
	text-align: center;
	font-weight: bold;
	font-size: 1.3em;
`

export const FootprintSubTitle = styled(Text)`
	text-align: center;
	font-weight: 400;
	font-size: 0.85em;
`

export const FootprintIntroductoryText = styled(Text)`
	text-align: center;
	font-weight: 400;
	font-size: 0.7em;
`
