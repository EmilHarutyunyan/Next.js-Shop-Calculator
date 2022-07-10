// Third-party imports
import styled from "styled-components"
import {
	space,
	color,
	fontSize,
	position,
	textAlign,
	layout,
	shadow,
	maxWidth,
	border,
	compose,
} from "styled-system"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Fixed = styled.div(
	{ position: "fixed" },
	compose(space, color, fontSize, position, textAlign, layout, shadow, maxWidth, border)
)

Fixed.displayName = "Fixed"

export default Fixed
