// Third-party imports
import styled from "styled-components"
import { Form } from "formik"

// Global imports
import { Flex } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const colorCallback = defaultColor => ({ theme, isFieldInputValid, placeholder }) => {
	if (placeholder === "your email") {
		return isFieldInputValid ? theme.colors.white : theme.colors.errorRed
	}
	return defaultColor(theme)
}

export const StyledInput = styled.input`
	width: 100%;
	border: none;
	font-size: ${({ placeholder }) => (placeholder === "your email" ? "10px" : "12px")};
	font-family: ${({ theme }) => theme.fonts.family.primary};
	line-height: 20px;
	font-weight: 400;
	padding: 5px;
	color: ${colorCallback(theme => theme.colors.grey3)};
	border-bottom: 1px solid ${colorCallback(theme => theme.colors.pureBlack)};
	border: 1px solid ${colorCallback(theme => theme.colors.pureBlack)};

	background-color: ${({ theme, placeholder }) =>
		placeholder === "your email" && theme.colors.black};
	::placeholder,
	::-webkit-input-placeholder {
		color: ${({ theme, placeholder }) =>
			placeholder === "your email" && theme.colors.white};
		font-family: ${({ theme, placeholder }) =>
			placeholder === "your email" && theme.variants.sm};
	}
`

export const ErrorStyle = styled(Flex)`
	width: 100%;
	height: 24px;
	font-size: 10px;
	font-family: ${({ theme }) => theme.fonts.family.primary};
	color: ${({ theme }) => theme.colors.errorRed};
`

export const StyledForm = styled(Form).attrs({
	// Disables browser-level validation so that Formik validation doesn't clash with it
	noValidate: true,
})`
	width: 100%;
`

export const FormikInputsContainer = styled(Flex)`
	flex-direction: column;
	width: 100%;
`

export const FormButtonsContainer = styled(Flex)`
	width: 100%;
	justify-content: space-between;
	align-items: flex-end;
`
