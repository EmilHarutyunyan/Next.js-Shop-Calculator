// Third-party imports

// Global imports
import { swapKeysAndValues } from "@/lib"

// Local imports

////////////////////////////////////////////////////////////////////////////////

// Heading tags
export const blockTypesByHeadingTag = {
	p: "unstyled",
	h1: "header-one",
	h2: "header-two",
	h3: "header-three",
	h4: "header-four",
	h5: "header-five",
	h6: "header-six",
}

export const headingTagDisplayNames = {
	p: "Normal",
	h1: "H1",
	h2: "H2",
	h3: "H3",
	h4: "H4",
	h5: "H5",
	h6: "H6",
}

export const headingTagsByBlockType = swapKeysAndValues(blockTypesByHeadingTag)

// Toolbar icons
export const toolbarIcons = [
	{
		iconLabel: "bold",
		iconStyle: "BOLD",
		iconFilename: "bold",
	},
	{
		iconLabel: "italic",
		iconStyle: "ITALIC",
		iconFilename: "italic",
	},
	{
		iconLabel: "Underline",
		iconStyle: "UNDERLINE",
		iconFilename: "underline",
	},
]

export const richTextEditorFocusDelay = 50 // Milliseconds
