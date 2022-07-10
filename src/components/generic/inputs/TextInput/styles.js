// Third-party imports
import styled from "styled-components"

// Global imports
import { Flex } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const Container = styled(Flex)`
	flex-direction: column;
	margin-top: 10px;
	margin-bottom: 10px;
`

export const StyledTextInputLabel = styled.div`
	margin-bottom: 5px;
	margin-left: 5px;
	font-size: 12px;
	width: 100%;
	color: ${({ theme }) => theme.colors.gray};
`

export const StyledTextInput = styled.input`
	width: 100%;
	color: ${({ theme }) => theme.colors.gray};
	height: 30px;
	outline: none;
	padding: 5px;
	border-radius: 5px;
	font-size: 14px;
	background-color: ${({ theme }) => theme.colors.lightBlack};
	/* border-width: 1px; */
	border-color: rgb(0, 0, 0, 0);
	/* border-bottom-color: ${({ theme }) => theme.colors.black}; */

	&::placeholder {
		color: ${({ theme }) => theme.colors.gray};
	}
`
