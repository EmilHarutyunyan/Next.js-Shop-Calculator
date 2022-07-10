// Third-party imports
import { useCallback, useMemo } from "react"
import { EditorState, RichUtils } from "draft-js"

// Global imports
import { useRichTextEditorState } from "@/contexts"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function useHyperlinkEditor
 * @category Hooks
 * @description React Hook used to manage the state of the RichTextEditor.
 */
const useHyperlinkEditor = () => {
	const {
		editorState,
		setEditorState,
		setFocusOnEditor,
		isURLInputShown,
		showURLInput,
		hideURLInput,
		URLValue,
		setURLValue,
	} = useRichTextEditorState()

	const selection = useMemo(() => editorState.getSelection(), [editorState])
	const contentState = useMemo(() => editorState.getCurrentContent(), [editorState])

	const extractURLFromSelection = useCallback(() => {
		const startKey = selection.getStartKey()
		const startOffset = selection.getStartOffset()
		const blockWithLinkAtBeginning = contentState.getBlockForKey(startKey)
		const linkKey = blockWithLinkAtBeginning.getEntityAt(startOffset)
		const linkInstance = linkKey ? contentState.getEntity(linkKey) : null
		return linkInstance ? linkInstance.getData().url : ""
	}, [selection, contentState])

	const openHyperlinkEdit = useCallback(() => {
		showURLInput()
		setURLValue(extractURLFromSelection())
	}, [showURLInput, setURLValue, extractURLFromSelection])

	const closeHyperlinkEdit = useCallback(() => {
		hideURLInput()
		setURLValue("")
	}, [hideURLInput, setURLValue])

	const promptHyperlinkEdit = useCallback(
		e => {
			e.preventDefault()
			// Retrieve selection from state, and if it's not empty
			if (!selection.isCollapsed()) {
				// Turn on the input field display with the URL in it.
				openHyperlinkEdit()
			}
		},
		[openHyperlinkEdit, selection]
	)

	const addHyperlinkToEditorState = useCallback(() => {
		//e.preventDefault()

		// Create link from the inputted URL on the HTML state
		const contentStateWithLink = contentState.createEntity("LINK", "MUTABLE", {
			url: URLValue,
		})
		const linkEntity = contentStateWithLink.getLastCreatedEntityKey()

		// Creating new editor state with new URL link added
		const newEditorState = EditorState.set(editorState, {
			currentContent: contentStateWithLink,
		})

		// Attach URL link to current selection
		const newSelection = newEditorState.getSelection()
		setEditorState(RichUtils.toggleLink(newEditorState, newSelection, linkEntity))

		// Turn off the input field display
		closeHyperlinkEdit()
	}, [contentState, URLValue, editorState, setEditorState, closeHyperlinkEdit])

	const removeHyperlinkFromSelection = useCallback(
		e => {
			e.preventDefault()
			if (!selection.isCollapsed()) {
				setEditorState(RichUtils.toggleLink(editorState, selection, null))
			}
		},
		[editorState, setEditorState, selection]
	)

	return {
		addHyperlinkToEditorState,
		URLValue,
		promptHyperlinkEdit,
		removeHyperlinkFromSelection,
		isURLInputShown,
		setURLValue,
		closeHyperlinkEdit,
		setFocusOnEditor,
	}
}

export default useHyperlinkEditor
