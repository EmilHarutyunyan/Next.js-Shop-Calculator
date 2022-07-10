// Third-party imports
import React from "react"

// Global imports
import GlobalStyling from "@/styles/global"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function GlobalStyleDecorator
 * @category Storybook
 * @subcategory Decorators
 * @description Adds the CSS code contained in the global CSS from the project to the stories.
 */
const GlobalStyleDecorator = Story => (
	<GlobalStyling>
		<Story />
	</GlobalStyling>
)

export default GlobalStyleDecorator
