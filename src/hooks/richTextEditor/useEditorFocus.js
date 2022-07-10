// Third-party imports
import { useRef, useCallback } from "react"

// Global imports
import { richTextEditorFocusDelay } from "@/constants"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const useEditorFocus = () => {
	const editorRef = useRef(null)

	const setFocusOnEditor = useCallback(() => {
		setTimeout(() => {
			editorRef.current.focus()
		}, richTextEditorFocusDelay)
	}, [editorRef])

	return { editorRef, setFocusOnEditor }
}

export default useEditorFocus
