// Third-party imports
import React from "react"

// Global imports

// Local imports
import { LinkTooltipContainer, LinkContainer } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function HTMLLink
 * @category Hooks
 * @subcategory Rich text editor
 * @description Component used to render hyperlinks in the RichTextEditor.
 * @param {object} contentState -
 * @param {object} entityKey -
 */
const HTMLLink = ({ contentState, entityKey, children }) => {
	// Variables
	const { url } = contentState.getEntity(entityKey).getData()

	// Props
	const aTagProps = {
		href: url,
	}

	return (
		<LinkContainer {...aTagProps}>
			<LinkTooltipContainer>{aTagProps.href}</LinkTooltipContainer>
			{children}
		</LinkContainer>
	)
}
export default HTMLLink
