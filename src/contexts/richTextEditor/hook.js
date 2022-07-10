// Third-party imports
import { useContext } from "react"

// Global imports
import RichTextEditorContext from "./context"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const useRichTextEditorState = () => {
	const context = useContext(RichTextEditorContext)

	if (context === undefined) {
		throw new Error(
			"The useRichTextEditor React hook must be used within the RichTextEditorProvider."
		)
	}

	return context
}

export default useRichTextEditorState
