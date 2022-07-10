// Third-party imports
import styled from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const Container = styled.div`
	display: flex;
	align-items: center;
	padding-right: 30px;
`

export const StyledInput = styled.input`
	height: 35px;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
	background-color: ${({ theme }) => theme.colors.darkGray};
	color: ${({ theme }) => theme.colors.gray};
	font-size: 16px;
	width: 250px;
	padding-left: 15px;
	::-webkit-search-decoration,
	::-webkit-search-cancel-button,
	::-webkit-search-results-button,
	::-webkit-search-results-decoration {
		display: none;
	}
`
