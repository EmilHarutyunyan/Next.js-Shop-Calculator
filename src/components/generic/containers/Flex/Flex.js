// Third-party imports
import styled from "styled-components"
import {
	space,
	color,
	fontSize,
	position,
	textAlign,
	layout,
	flexbox,
	shadow,
	maxWidth,
	border,
	compose
} from "styled-system"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Flex = styled.div(
	{ display: "flex" },
	compose(
		space,
		color,
		fontSize,
		position,
		textAlign,
		layout,
		flexbox,
		shadow,
		maxWidth,
		border
	)
)

Flex.displayName = "Flex"

Flex.defaultProps = {
	justifyContent: "flex-start",
	alignItems: "flex-start"
}

export default Flex
