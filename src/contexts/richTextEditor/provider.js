// Third-party imports
import React, { useState } from "react"
import { EditorState } from "draft-js"

// Global imports
import { useEditorFocus } from "@/hooks/richTextEditor"
import { useBoolean } from "@/hooks"

// Local imports
import RichTextEditorContext from "./context"

////////////////////////////////////////////////////////////////////////////////

const RichTextEditorProvider = ({ children }) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty())
	const { editorRef, setFocusOnEditor } = useEditorFocus()
	const [isURLInputShown, showURLInput, hideURLInput] = useBoolean(false)
	const [URLValue, setURLValue] = useState("")

	const contextObject = {
		editorState,
		setEditorState,
		editorRef,
		setFocusOnEditor,
		isURLInputShown,
		showURLInput,
		hideURLInput,
		URLValue,
		setURLValue,
	}

	return (
		<RichTextEditorContext.Provider value={contextObject}>
			{children}
		</RichTextEditorContext.Provider>
	)
}

export default RichTextEditorProvider
