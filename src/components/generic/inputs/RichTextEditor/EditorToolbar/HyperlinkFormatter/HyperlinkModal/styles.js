// Third-party imports
import styled from "styled-components"

// Global imports
import { Flex } from "@/components/generic"
import { Form } from "formik"

// Local imports

////////////////////////////////////////////////////////////////////////////////
export const StyledBackdrop = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: rgb(0, 0, 0, 0.5);
	z-index: 1;
`

export const StyledForm = styled(Form)`
	position: fixed;
	z-index: 1;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 300px;
	background: ${({ theme }) => theme.colors.darkGray};
	padding: 30px;
`

export const StyledButtons = styled(Flex)`
	justify-content: space-between;
	margin-top: 20px;
`

export const StyledErrorMessage = styled.div`
	margin-left: 5px;
	font-size: 12px;
	height: 12px;
	color: ${({ theme }) => theme.colors.red};
`
