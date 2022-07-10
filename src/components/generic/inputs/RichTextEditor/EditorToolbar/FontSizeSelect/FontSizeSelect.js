// Third-party imports
import React, { createElement } from "react"

// Global imports
import { Icon } from "@/components/generic"
import { useHeadingTag } from "@/hooks/richTextEditor"
import { useBoolean, useExternalClick } from "@/hooks"
import { headingTagDisplayNames } from "@/constants"

// Local imports
import {
	SelectTag,
	CustomArrow,
	DropdownIconContainer,
	DropdownContainer,
} from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function FontSizeSelect
 * @category Components
 * @subcategory RichTextEditor
 * @description Enables selecting the font size of a line in the rich text editor.
 */
const FontSizeSelect = () => {
	// Hooks
	const [isDropdownOpen, openDropdown, closeDropdown, toggleDropdown] = useBoolean()
	const { onHeadingTagChange, setFocusOnEditor, headingTag } = useHeadingTag()
	const { containerRef } = useExternalClick(closeDropdown)

	const headingTagProps = headingTag => ({
		key: headingTag,
		onClick: () => {
			onHeadingTagChange(headingTag)
			openDropdown()
			setFocusOnEditor()
		},
	})

	return (
		<SelectTag onClick={() => toggleDropdown()} ref={containerRef}>
			<DropdownIconContainer>
				<Icon iconFilename="Tt-editor" />
				<CustomArrow isDropdownOpen={isDropdownOpen} />
			</DropdownIconContainer>

			{isDropdownOpen && (
				<DropdownContainer checked={headingTag}>
					{/* <p {....headingTagProps(headingTag)}>Normal</p> */}
					{Object.entries(
						headingTagDisplayNames
					).map(([headingTag, displayName]) =>
						createElement(
							headingTag,
							headingTagProps(headingTag),
							displayName
						)
					)}
				</DropdownContainer>
			)}
		</SelectTag>
	)
}

export default FontSizeSelect
