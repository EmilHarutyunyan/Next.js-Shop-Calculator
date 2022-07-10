// Third-party imports
import React from "react"
import styled from "styled-components"

// Global imports
import { Flex } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const DropdownContainer = styled.div`
	position: absolute;
	z-index: 2;
	width: 78px;
	background: ${({ theme }) => theme.colors.lightBlack};
	color: white;
	margin-top: 12px;
	font-size: 14px;
	cursor: pointer;
	> * {
		padding: 8px 15px;
		line-height: 20px;
		height: 34px;
		&:hover {
			background-color: ${({ theme }) => theme.colors.heavyGray};
		}
	}
	${({ checked, theme }) =>
		`${checked}{
					background: ${theme.colors.black};
				}`}
`

export const SelectTag = styled.div`
	height: 30px;
	margin-left: 10px;
	margin-right: 10px;
	width: 50px;
	border-radius: 3px;
	background-color: ${({ theme }) => theme.colors.lightBlack};
	:hover {
		background-color: ${({ theme }) => theme.colors.black};
		cursor: pointer;
	}
`

export const DropdownIconContainer = styled(Flex)`
	justify-content: space-between;
	padding: 5px;
	padding-top: 8px;
`

const CustomArrowUp = styled.span`
	// dropdown is open
	content: "";
	margin-top: 3px;
	border-left: 0.3em solid transparent;
	border-right: 0.3em solid transparent;
	border-bottom: 0.3em solid ${({ theme }) => theme.colors.gray};
`

const CustomArrowDown = styled.span`
	// dropdown is closed
	content: "";
	margin-top: 5px;
	border-left: 0.3em solid transparent;
	border-right: 0.3em solid transparent;
	border-top: 0.3em solid ${({ theme }) => theme.colors.gray};
`

export const CustomArrow = ({ isDropdownOpen }) =>
	isDropdownOpen ? <CustomArrowUp /> : <CustomArrowDown />
