// Third-party imports
import styled from "styled-components"

// Global imports
import { withTheme } from "@/components/hoc"
import { Flex } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const Container = styled(Flex)`
	background-color: ${({ theme }) => theme.colors.white0};
	width: 100%;
	box-sizing: border-box;
	height: 100%;
	min-height: 100vh;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	padding-bottom: 100px;
	color: red;
`
