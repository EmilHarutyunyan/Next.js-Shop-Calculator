// Third-party imports
import React from "react"
import { storiesOf } from "@storybook/react"
import centered from "@storybook/addon-centered/react"

// Global imports
import { Text, SubmitButton } from "@/components/generic"
import { useBoolean, useTheme } from "@/hooks"

// Local imports
import If from "./If"

////////////////////////////////////////////////////////////////////////////////

const ExampleComponent = ({ position }) => {
	// Hooks
	const [isOn, , , toggleOnOff] = useBoolean(false)
	const theme = useTheme()

	// Props
	const textProps = {
		style: {
			position,
			margin: "auto",
			color: theme.colors.white,
		},
		children: "Button displayed",
	}

	return (
		<>
			<SubmitButton onClick={toggleOnOff}>Click me</SubmitButton>
			<If condition={isOn}>
				<Text {...textProps} />
			</If>
		</>
	)
}

storiesOf("Generic|If", module)
	.addDecorator(centered)
	.add("Fixed content", () => <ExampleComponent position="fixed" />)
	.add("Relative content", () => <ExampleComponent position="relative" />)
