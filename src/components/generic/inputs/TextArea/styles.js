// Third-party imports
import styled from "styled-components"
import { space, layout } from "styled-system"

// Global imports
import { Flex } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const Container = styled(Flex)`
	flex-direction: column;
	margin-top: 20px;
`

export const StyledLabel = styled.div`
	margin-bottom: 5px;
	margin-left: 5px;
	color: ${({ theme }) => theme.colors.gray};
`

export const StyledTextArea = styled.textarea`
	padding: 5px;
	color: ${({ theme }) => theme.colors.gray};
	outline: none;
	font-size: 14px;
	border-width: 0px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.lightBlack};
	resize: none;
	${layout}
	${space}
`
