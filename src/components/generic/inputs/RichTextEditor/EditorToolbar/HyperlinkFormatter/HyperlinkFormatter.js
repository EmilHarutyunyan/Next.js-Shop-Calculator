// Third-party imports
import React from "react"

// Global imports
import { useHyperlinkEditor } from "@/hooks/richTextEditor"
import { Icon, If } from "@/components/generic"

// Local imports
import { ToolbarItem } from "../styles"
import HyperlinkModal from "./HyperlinkModal"

////////////////////////////////////////////////////////////////////////////////

const HyperlinkFormatter = () => {
	const {
		isURLInputShown,
		promptHyperlinkEdit,
		removeHyperlinkFromSelection,
	} = useHyperlinkEditor()

	const linkOnItemProps = {
		iconFilename: "link",
		onMouseDown: promptHyperlinkEdit,
	}

	const linkOffItemProps = {
		iconFilename: "linkOff",
		onMouseDown: removeHyperlinkFromSelection,
	}

	return (
		<>
			<ToolbarItem>
				<Icon {...linkOnItemProps} />
			</ToolbarItem>
			<ToolbarItem>
				<Icon {...linkOffItemProps} />
			</ToolbarItem>
			<If condition={isURLInputShown}>
				<HyperlinkModal />
			</If>
		</>
	)
}

export default HyperlinkFormatter
