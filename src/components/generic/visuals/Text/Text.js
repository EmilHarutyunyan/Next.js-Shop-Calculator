// Third-party imports
import React, { useContext } from "react"
import { get } from "lodash"
import { ThemeContext } from "styled-components"

// Global imports

// Local imports
import { SystemText } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Text
 * @category Generic
 * @description Renders text according to a CSS style defined in the theme's text variants.
 * @param {string} variant - Defines the text's chosen CSS style according to the theme object.
 * @param {string} [color="inherit"] - The text's color. Defaults to what the text color is in the surrounding environment, and this is how the component should be used.
 */
const Text = ({ variant, ...props }) => {
	const theme = useContext(ThemeContext)

	if (variant && !theme.textVariants[variant])
		throw new Error(`Variant ${variant} for Text does not exist in theme`)

	const variantProps = get(theme, `textVariants.${variant}`, {})

	return <SystemText {...variantProps} {...props} />
}

Text.defaultProps = {
	color: "#323536",
}

export default Text
