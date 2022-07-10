// Third-party imports
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import centered from "@storybook/addon-centered/react"

// Global imports

// Local imports
import Text from "./Text"

////////////////////////////////////////////////////////////////////////////////

const ExampleText = props => (
	<Text {...props} as="h1" onClick={action("clicked")}>
		Example text
	</Text>
)

ExampleText.defaultProps = {
	color: "white",
}

storiesOf("Generic|Text", module)
	.addDecorator(centered)
	.add("default", () => <ExampleText />)
	.add("variant: xl", () => <ExampleText variant="xl" />)
	.add("variant: lg", () => <ExampleText variant="lg" />)
	.add("variant: md", () => <ExampleText variant="md" />)
	.add("variant: sm", () => <ExampleText variant="sm" />)
	.add("color: red", () => <ExampleText variant="sm" color="red" />)
