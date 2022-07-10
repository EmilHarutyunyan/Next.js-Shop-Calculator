// Third-party imports
import React from "react"

// Global imports

// Local imports
import TextBIUFormatters from "./TextBIUFormatters"
import FontSizeSelect from "./FontSizeSelect"
import HyperlinkFormatter from "./HyperlinkFormatter"
import { ToolbarContainer } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function EditorToolbar
 * @category Generic
 * @subcategory Rich text editor
 * @description Aggregates all the rich text editor functionalities in one styled toolbar.
 */
const EditorToolbar = () => (
	<ToolbarContainer>
		<TextBIUFormatters />
		<FontSizeSelect />
		<HyperlinkFormatter />
	</ToolbarContainer>
)

export default EditorToolbar
