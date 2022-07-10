// Third-party imports
import styled from "styled-components"

// Global imports
import { withTheme } from "@/components/hoc"
import { Fixed, Text } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const Container = withTheme(
	styled(Fixed)`
		/* Position */
		top: 0;
		right: 0;
		height: ${({ theme }) => theme.layout.headerHeight};
		/* Display */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: ${({ theme }) => theme.colors.gray};
		/* Box */
		background-color: ${({ theme }) => theme.colors.black};
		border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
		z-index: 1;
	`,
	{
		left: ({ theme }) => theme.layout.sideBarWidth,
	}
)

export const HeaderTitle = withTheme(styled(Text)`
	padding-left: 30px;
	font-family: ${({ theme }) => theme.fonts.family.secondary};
	font-weight: ${({ theme }) => theme.fonts.weights.bold};
	text-transform: uppercase;
	font-size: 24px;
	/* For text vertical-centering*/
	margin: auto 0px;
	height: 50%;
`)
