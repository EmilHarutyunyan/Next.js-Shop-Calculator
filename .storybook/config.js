// Third-party imports
import { configure, addDecorator } from "@storybook/react"
import { addParameters } from "@storybook/react"
// import { withA11y } from "@storybook/addon-a11y"

// Global imports
import "@/styles/cssfiles"

// Local imports
import {
	BackgroundDecorator,
	StyledThemeDecorator,
	ReduxDecorator,
	GlobalStyleDecorator,
} from "./decorators"
import "./router" // Defines the NextJS router for Storybook
import staiyTheme from "./staiyTheme"

////////////////////////////////////////////////////////////////////////////////

addParameters({
	options: {
		theme: staiyTheme,
	},
})

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /stories\.js$/)

const loadStories = () => {
	req.keys().forEach(filename => req(filename))
	addDecorator(BackgroundDecorator)
	addDecorator(GlobalStyleDecorator)
	addDecorator(StyledThemeDecorator)
	addDecorator(ReduxDecorator)
	// addDecorator(withA11y)
}

configure(loadStories, module)
