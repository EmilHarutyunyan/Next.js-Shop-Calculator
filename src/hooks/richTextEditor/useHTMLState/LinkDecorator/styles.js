// Third-party imports
import styled from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const LinkTooltipContainer = styled.div`
	display: none;
	position: absolute;

	bottom: 155%;
	left: calc(40% - 50px);
	transform: translateY(10px);

	color: ${({ theme }) => theme.colors.gray};
	text-align: centered;
	max-width: 200px;

	border-radius: 0.3rem;
	background: ${({ theme }) => theme.colors.black};
	padding: 0.3rem;
	font-size: 14px;
`

export const LinkContainer = styled.a`
	color: #69b1fa;
	position: relative;

	:hover {
		${LinkTooltipContainer} {
			display: block;
		}
	}
`
