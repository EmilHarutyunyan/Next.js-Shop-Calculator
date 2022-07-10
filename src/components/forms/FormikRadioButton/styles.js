// Third-party imports
import styled from "styled-components"

// Global imports
import { Flex, Text } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const CheckboxContainer = styled(Flex)`
	cursor: pointer;
	justify-content: space-between;
	align-items: center;
	vertical-align: middle;
	height: 100%;
	width: 100%;
	padding-bottom: 5px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey1};
`

export const SquareCheckmark = styled.div`
	cursor: pointer;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.colors.dynamiteGrey};
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
	cursor: pointer;
	margin-left: 7px;
	font-size: 11px;
	line-height: 1.5;
	font-family: ${({ theme }) => theme.fonts.family.primary};
	font-weight: 400;
	color: ${({ theme }) => theme.colors.grey3};
`
