// Third-party imports
import React from "react"
import styled from "styled-components"

// Global imports
import { Fixed } from "@/components/generic"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Background = styled(Fixed)`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: ${({ theme }) => theme.colors.lightBlack};
	z-index: -99999; // Makes it possible to overwrite this background color with another styled-component
`

/**
 * @function BackgroundDecorator
 * @category Storybook
 * @subcategory Decorators
 * @description Adds a default background color to a story. To overwrite it, just put a background color with a z-index over -99999.
 */
const BackgroundDecorator = Story => (
	<>
		<Background />
		<Story />
	</>
)

export default BackgroundDecorator
