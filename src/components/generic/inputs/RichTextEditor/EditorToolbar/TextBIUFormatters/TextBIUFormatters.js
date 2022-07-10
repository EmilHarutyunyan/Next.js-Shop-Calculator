// Third-party imports
import React from "react"

// Global imports
import { useFontStyle } from "@/hooks/richTextEditor"
import { toolbarIcons } from "@/constants"
import { Icon } from "@/components/generic"

// Local imports
import { ToolbarItem } from "../styles"

////////////////////////////////////////////////////////////////////////////////

const TextBIUFormatters = () => {
	// Hooks
	const { applyBIUStyle, isBIUStyleActive } = useFontStyle()

	// Props
	const toolbarItemProps = ({ iconLabel, iconStyle, iconFilename }) => ({
		isBIUStyleActive: isBIUStyleActive(iconStyle),
		key: iconLabel,
		onMouseDown: e => {
			applyBIUStyle(e, iconStyle)
		},
		children: <Icon iconFilename={iconFilename} />,
	})

	return toolbarIcons.map((iconAttributes, idx) => (
		<ToolbarItem key={idx} {...toolbarItemProps(iconAttributes)} />
	))
}

export default TextBIUFormatters
