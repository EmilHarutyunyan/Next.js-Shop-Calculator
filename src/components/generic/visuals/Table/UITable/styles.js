// Third-party imports
import styled from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const StyledTable = styled.table`
	box-shadow: 0 0 8px 8px ${({ theme }) => theme.colors.black};
	margin: auto;
	border-collapse: collapse;
	border-style: hidden;
	width: 95%;

	th,
	td {
		color: ${({ theme }) => theme.colors.gray};
		border: 1px solid ${({ theme }) => theme.colors.darkGray};
	}
	
	th {
		text-align: left;
		padding: 8px 10px 8px 10px;
		font-weight: bold;
		background-color: ${({ theme }) => theme.colors.heavyGray};
		color: ${({ theme }) => theme.colors.white};
		border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
	}

	td {
		background-color: ${({ theme }) => theme.colors.lightBlack};
		font-size: 15px;
		padding: 10px;
		width: 200px
	}
}
`
