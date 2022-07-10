// Third-party imports
import { useCallback } from "react"
import { RichUtils } from "draft-js"

// Global imports
import { useRichTextEditorState } from "@/contexts"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function useFontStyle
 * @category Hooks
 * @description React Hook used to manage the state of the RichTextEditor.
 */
const useFontStyle = () => {
	const { editorState, setEditorState } = useRichTextEditorState()
	const applyBIUStyle = useCallback(
		(e, style) => {
			e.preventDefault()
			setEditorState(RichUtils.toggleInlineStyle(editorState, style))
		},
		[editorState, setEditorState]
	)

	const isBIUStyleActive = useCallback(
		style => editorState.getCurrentInlineStyle().has(style),
		[editorState]
	)

	return {
		isBIUStyleActive,
		applyBIUStyle,
	}
}

export default useFontStyle
