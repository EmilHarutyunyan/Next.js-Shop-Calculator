// Third-party imports
import styled, { css } from "styled-components"
import {
	typography,
	maxWidth,
	color,
	space,
	flexbox,
	system,
	display,
	compose,
	layout,
	borderBottom
} from "styled-system"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const systemStyles = compose(
	typography,
	maxWidth,
	color,
	space,
	flexbox,
	display,
	layout,
	borderBottom,
	system({ textTransform: true }),
	system({ textDecoration: true })
)

/* stylelint-disable */
const lineClamp = props =>
	props.lineClamp
		? css`
				-webkit-box-orient: vertical;
				display: -webkit-box;
				-webkit-line-clamp: 3;
		  `
		: ""

const hasEllipsis = props =>
	props.hasEllipsis
		? css`
				max-width: 100%;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
		  `
		: ""

export const SystemText = styled.span`
	${systemStyles}
	${lineClamp}
	${hasEllipsis}
`
