// Third-party imports
import React from "react"
import { useSpring } from "react-spring"

// Global imports
import { useBoolean, useMeasure, useTheme } from "@/hooks"
import { Icon } from "@/components/generic"

// Local imports
import { DropdownContainer, Header, ContentContainer } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Dropdown
 * @description Dropdown that is used to hide/show content.
 * @param {string} title - It renders the title of the component.
 * @param {function} onDropdownClick - Verify if the right arrow was clicked.
 */
const Dropdown = ({ onDropdownClick = () => {}, children, title }) => {
	// Hooks
	const [isShown, , , toggleShown] = useBoolean(false)
	const [{ ref: containerRef }, heightToBeChanged] = useMeasure()
	const theme = useTheme()

	const { height, opacity, paddingBottom } = useSpring({
		height: isShown ? heightToBeChanged.height : 0,
		opacity: isShown ? 1 : 0,
		paddingBottom: isShown ? 14 : 0,
	})

	// Props
	const headerProps = {
		onClick: () => {
			onDropdownClick(isShown)
			toggleShown()
		},
	}
	const iconProps = {
		style: {
			color: theme.colors.white,
			transform: isShown ? "rotate(0deg)" : "rotate(180deg)",
			transition: "transform 0.3s",
		},
		iconFilename: "angle-up",
	}

	const contentContainerProps = {
		style: {
			boxSizing: "content-box",
			opacity,
			height,
			paddingBottom,
		},
	}

	return (
		<DropdownContainer>
			<Header {...headerProps}>
				{title}
				<Icon {...iconProps} />
			</Header>
			<ContentContainer {...contentContainerProps}>
				<div ref={containerRef}>{children}</div>
			</ContentContainer>
		</DropdownContainer>
	)
}

export default Dropdown
