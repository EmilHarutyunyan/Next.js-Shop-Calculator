// Third-party imports
import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import centered from "@storybook/addon-centered/react"

// Global imports

// Local imports
import TextArea from "./TextArea"

////////////////////////////////////////////////////////////////////////////////

const Container = styled.div`
	width: 300px;
	height: 500px;
	padding: 50px;
	background-color: ${({ theme }) => theme.colors.black};
`

const textAreaProps = {
	label: "Example",
	placeholder: "Insert content here",
	name: "textarea",
	value: "",
	onChange: value => action("changed")(value),
	width: "100%",
	height: "300px",
}

storiesOf("Generic|TextArea", module)
	.addDecorator(Story => (
		<Container>
			<Story />
		</Container>
	))
	.addDecorator(centered)
	.add("default", () => <TextArea {...textAreaProps} />)
