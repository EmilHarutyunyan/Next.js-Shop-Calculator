// Third-party imports
import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import centered from "@storybook/addon-centered/react"

// Global imports

// Local imports
import TextInput from "./TextInput"

////////////////////////////////////////////////////////////////////////////////

const textInputProps = {
	label: "Example",
	placeholder: "Insert content here",
	name: "textInput",
	value: "",
	onChange: value => action("changed")(value),
	width: "100%",
	height: "300px",
}

const CardContainer = styled.div`
	width: 300px;
	height: 500px;
	padding: 50px;
	background-color: ${({ theme }) => theme.colors.black};
`

storiesOf("Generic|TextInput", module)
	.addDecorator(Story => (
		<CardContainer>
			<Story />
		</CardContainer>
	))
	.addDecorator(centered)
	.add("default", () => <TextInput {...textInputProps} />)
