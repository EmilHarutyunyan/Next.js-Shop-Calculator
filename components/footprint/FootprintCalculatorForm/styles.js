// Third-party imports
import styled from "styled-components"

// Global imports
import { Flex, Fixed } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const FootprintCalculatorFormContainer = styled(Flex)`
	width: 300px;
	min-height: 500px;
	/* border: 1px solid black; */
`

export const SubmitButtonContainer = styled(Flex)`
	width: 100%;
	justify-content: center;
	align-items: center;
`
export const ContinueButtonContainer = styled(Flex)`
	width: 100%;
	justify-content: center;
	align-items: center;
`

export const FootPrintCalculatorFormCategory = styled.div`
	border: solid 1px;
	color: gray;
	padding: 5px 30px 5px 30px;
	margin: 2px;
`
export const InfoIconContainer = styled.div`
	position: relative;
	right: ${props => props.iconPos}px;

	& .info-text {
		display: none;
	}

	&:hover .info-text {
		display: inline;
		position: absolute;
		bottom: 0;
		font-size: 0.7em;
		background-color: #86bdc0;
		border-radius: 6px;
		// border: solid 1px white;
		color: #e4e4e4;
		padding: 8px;
		width: 220px;
		font-family: Basic Sans;
		font-weight: 900;
		text-align: justify;
		opacity: 0.96;
	}
`
