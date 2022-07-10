// Third-party imports
import styled from "styled-components"

// Global imports
import { withTheme } from "@/components/hoc"
import { Fixed, Text } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const Container = withTheme(
	styled(Fixed)`
		bottom: 0;
		right: 0;
		height: ${({ theme }) => theme.layout.footerHeight};
		/* Display */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: ${({ theme }) => theme.colors.gray};
		/* Box */
		background-color: ${({ theme }) => theme.colors.black};
		border-top: 1px solid ${({ theme }) => theme.colors.darkGray};
		z-index: 1;
	`,
	{
		left: ({ theme }) => theme.layout.sideBarWidth,
	}
)

export const FooterTextDisplay = withTheme(styled(Text)`
	padding-left: 30px;
	font-family: ${({ theme }) => theme.fonts.family.primary};
	font-weight: ${({ theme }) => theme.fonts.weights.medium};
	font-size: 18px;
	/* For text vertical-centering*/
	margin: auto 0px;
	height: 45%;
`)
