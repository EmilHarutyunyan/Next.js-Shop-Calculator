// Third-party imports
import React from "react"
import { ThemeProvider } from "styled-components"

// Global imports
import theme from "@/styles/theme"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function StyledThemeDecorator
 * @category Storybook
 * @subcategory Decorators
 * @description Wraps a story with a ThemeProvider from the styled-components library to enable using the theme object in the stories.
 */
const StyledThemeDecorator = Story => (
	<ThemeProvider theme={theme}>
		<Story />
	</ThemeProvider>
)

export default StyledThemeDecorator
