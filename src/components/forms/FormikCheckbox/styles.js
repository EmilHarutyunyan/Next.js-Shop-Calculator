// Third-party imports
import styled from "styled-components"

// Global imports
import { Text, Flex } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const CheckboxContainer = styled(Flex)`
	justify-content: space-between;
	align-items: center;
	vertical-align: middle;
	height: 100%;
`

export const SquareCheckmark = styled.div`
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.colors.black};
	opacity: ${({ checked }) => (checked ? 1 : 0)};
	transition: all 150ms;
`

export const StyledCheckbox = styled(Flex)`
	cursor: pointer;
	width: 11px;
	height: 11px;
	border: 1px solid ${({ theme }) => theme.colors.dynamiteGrey};
	padding: 1px;
	margin-top: 2px;
	background: ${({ theme }) => theme.colors.white};
`

export const CheckboxLabel = styled(Text).attrs({
	as: "label",
})`
	margin-left: 7px;
	font-size: 11px;
	line-height: 1.5;
	font-family: ${({ theme }) => theme.fonts.family.primary};
	font-weight: 400;
	color: ${({ theme }) => theme.colors.black0};
`
