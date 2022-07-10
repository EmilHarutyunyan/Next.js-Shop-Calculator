// Third-party imports

// Global imports
import { CompositeDecorator } from "draft-js"

// Local imports
import HTMLLink from "./HTMLLink"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function findLinkEntities
 * @category Hooks
 * @subcategory Rich text editor
 * @description Strategy used to find links in the HTML state.
 * @param {object} contentBlock -
 * @param {object} contentState -
 * @param {function} callback -
 */
const findLinkEntities = (contentBlock, callback, contentState) => {
	contentBlock.findEntityRanges(character => {
		const entityKey = character.getEntity()
		const entityType = !!entityKey
			? contentState.getEntity(entityKey).getType()
			: null
		return entityKey !== null && entityType === "LINK"
	}, callback)
}

/**
 * @constant LinkDecorator
 * @category Hooks
 * @subcategory Rich text editor
 * @description Configuration tool for the RichTextEditor's EditorState object.
 */
const LinkDecorator = new CompositeDecorator([
	{
		strategy: findLinkEntities,
		component: HTMLLink,
	},
])

export default LinkDecorator
