// Third-party imports
import React, { forwardRef } from "react"
import { pick, omit } from "@styled-system/props"

// Global imports
import { If } from "@/components/generic"
import { onClientSide } from "@/constants"

// Local imports
import { StyledSpan } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const req = require.context(
	`!@svgr/webpack?{"icon":"true","svgo":"true"}!./library`,
	false,
	/\.svg$/
)

const getSVGIconByName = iconName => {
	try {
		try {
			return require(`./library/${iconName}.js`).default
		} catch (e) {
			return req(`./${iconName}.svg`).default
		}
	} catch (error) {
		throw new Error(
			`Could not load the icon with icon name '${iconName}'. Make sure the icon filename is correct.`
		)
	}
}

/**
 * @function Icon
 * @category Generic
 * @description Component to render an .svg image.
 * @param {string} icon - The SVG or JS filename of the icon to render. The default is to use the JavaScript, but the fallback is SVG.
 */
const Icon = forwardRef(({ iconFilename, as, ...props }, ref) => {
	if (!iconFilename || typeof iconFilename !== "string") {
		throw new Error(
			`Don't use <Icon iconFilename="..." /> without specifying an icon filename.`
		)
	}

	const IconSVG = getSVGIconByName(iconFilename)

	return (
		<If condition={onClientSide}>
			<StyledSpan ref={ref} as={as} {...pick(props)}>
				<IconSVG {...omit(props)} />
			</StyledSpan>
		</If>
	)
})

export default Icon
