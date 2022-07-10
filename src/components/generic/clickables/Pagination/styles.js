// Third-party imports
import styled from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const StyledPagination = styled.span`
	font-size: 15px;
	display: flex;
	align-items: center;
	color: ${({ theme }) => theme.colors.gray};
	padding-right: 30px;

	div {
		color: ${({ theme }) => theme.colors.gray};
		:nth-child(3) {
			margin: 0 9px 0 9px;
		}
		:nth-child(5) {
			margin-left: 9px;
		}
	}
	button {
		padding: 5px;
		margin: 0 3px 0 3px;
		svg {
			color: ${({ theme }) => theme.colors.gray};
		}
	}
	button:hover {
		transform: scale(1.2);
	}
`
