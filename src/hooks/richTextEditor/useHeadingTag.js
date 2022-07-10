// Third-party imports
import { useCallback, useMemo } from "react"
import { RichUtils } from "draft-js"

// Global imports
import { useRichTextEditorState } from "@/contexts"
import { blockTypesByHeadingTag, headingTagsByBlockType } from "@/constants"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function useHeadingTag
 * @category Hooks
 * @description React Hook used to manage the state of the RichTextEditor.
 */
const useHeadingTag = () => {
	const { editorState, setEditorState, setFocusOnEditor } = useRichTextEditorState()

	const onHeadingTagChange = useCallback(
		headingTag => {
			setEditorState(
				RichUtils.toggleBlockType(editorState, blockTypesByHeadingTag[headingTag])
			)
		},
		[editorState, setEditorState]
	)

	const headingTag = useMemo(() => {
		const blockType = editorState
			.getCurrentContent()
			.getBlockForKey(editorState.getSelection().getStartKey())
			.getType()
		return headingTagsByBlockType[blockType]
	}, [editorState])

	return {
		onHeadingTagChange,
		setFocusOnEditor,
		headingTag,
	}
}

export default useHeadingTag
