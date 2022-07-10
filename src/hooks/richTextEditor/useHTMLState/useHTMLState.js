// Third-party imports
import { useEffect, useCallback } from "react"
import { EditorState, convertFromHTML, ContentState } from "draft-js"
import { stateToHTML } from "draft-js-export-html"

// Global imports
import { useRichTextEditorState } from "@/contexts"

// Local imports
import LinkDecorator from "./LinkDecorator"

////////////////////////////////////////////////////////////////////////////////

const exampleHtmlState =
	"<p><strong>B</strong> <em><strong>Italic</strong></em></p><p><br></p><p><strong>Fashion</strong></p><p><br></p><h1>Staiy</h1><strong>B</strong>"

/**
 * @function useHTMLState
 * @category Hooks
 * @description React Hook used to manage the conversion between the HTML state and the Editor State .
 */
const useHTMLState = () => {
	const { editorState, setEditorState } = useRichTextEditorState()

	const loadEditorStateFromHTML = useCallback(
		HTMLString => {
			const blocksFromHTML = convertFromHTML(HTMLString)
			const editorContent = ContentState.createFromBlockArray(
				blocksFromHTML.contentBlocks,
				blocksFromHTML.entityMap
			)
			setEditorState(EditorState.createWithContent(editorContent, LinkDecorator))
		},
		[setEditorState]
	)

	// Load HTML state as soon as context is rendered
	useEffect(() => {
		setTimeout(() => {
			// Mocked state, should come as an argument!
			loadEditorStateFromHTML(exampleHtmlState)
		}, 1000)
	}, [loadEditorStateFromHTML])

	// For internal debugging usage only, not actually used
	const getEditorStateAsHTML = useCallback(
		() => stateToHTML(editorState.getCurrentContent()),
		[editorState]
	)

	// Mocked for now! We should unmock it later
	// and allow receiving the actual action as a custom callback argument
	const saveHTMLToDatabase = useCallback(() => {
		console.log("RichTextEditor HTML content", getEditorStateAsHTML())
	}, [getEditorStateAsHTML])

	return {
		getEditorStateAsHTML,
		loadEditorStateFromHTML,
		saveHTMLToDatabase,
	}
}

export default useHTMLState
