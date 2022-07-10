// Third-party imports
import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
// import centered from "@storybook/addon-centered/react"

// Global imports
import { Flex, SubmitButton } from "@/components/generic"
import { useHTMLState } from "@/hooks/richTextEditor"
import { RichTextEditorProvider } from "@/contexts"

// Local imports
import RichTextEditor from "./RichTextEditor"

////////////////////////////////////////////////////////////////////////////////

const BorderContainer = styled(Flex)`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
`

const CenteringContainer = styled(Flex)`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10% 5%;
`

storiesOf("Generic|RichTextEditor", module)
	// Adds RichTextEditor context
	.addDecorator(Story => (
		<RichTextEditorProvider>
			<Story />
		</RichTextEditorProvider>
	))
	// Adds styling
	.addDecorator(Story => (
		<BorderContainer>
			<CenteringContainer>
				<Story />
			</CenteringContainer>
		</BorderContainer>
	))
	.add("Email Editor", () => {
		// Hooks
		const { saveHTMLToDatabase, getEditorStateAsHTML } = useHTMLState()

		// Props
		const submitButtonProps = {
			onClick: () => {
				saveHTMLToDatabase()
				action("Saving to database")(getEditorStateAsHTML())
			},
			style: {
				width: "100px",
				minHeight: "40px",
				margin: "15px 0",
			},
			children: "Save",
		}

		return (
			<>
				<RichTextEditor />
				<SubmitButton {...submitButtonProps} />
			</>
		)
	})
