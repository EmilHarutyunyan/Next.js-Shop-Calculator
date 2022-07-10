// Third-party imports
import React from "react"
import { Editor } from "draft-js"

// Global imports
import { useRichTextEditorState } from "@/contexts"

// Local imports
import EditorToolbar from "./EditorToolbar"
import { EditorContent, EditorContainer } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function RichTextEditor
 * @category Generic
 * @description Component to shows the RichTextEditor.
 */
const RichTextEditor = () => {
	// Hooks
	const { editorState, setEditorState, editorRef } = useRichTextEditorState()

	// Props
	const editorProps = {
		editorState,
		onChange: editorState => {
			setEditorState(editorState)
		},
	}

	return (
		<EditorContent>
			<EditorToolbar />
			<EditorContainer>
				<Editor ref={editorRef} {...editorProps} />
			</EditorContainer>
		</EditorContent>
	)
}

export default RichTextEditor
