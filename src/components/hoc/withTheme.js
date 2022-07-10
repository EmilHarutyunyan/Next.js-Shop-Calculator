// Third-party imports

// Global imports
import { useTheme } from "@/hooks"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function withTheme
 * @category Higher-order components
 * @description Enables using styled-system objects as style props in styled-components by wrapping them with this HOC. It is unpredictable what happens if props are sent in both the styled-component and in this HOC, so please don't use both simultaneously. Note: if styled-system ever gains this capability, we'll deprecate this HOC.
 * @param {object} themeStyles - An object consisting of key-value pairs where the names are names of style props the styled-component can accept, and the values are callbacks that take the theme as a destructurable-object-argument and compute a styled-system prop (or a standard style prop for that matter, but those can go in the styled-component itself).
 */
const withTheme = (Component, themeStyles = {}) => props => {
	const theme = useTheme()

	const themeProps = Object.entries(themeStyles).reduce(
		(accumulated, [propName, propCallback]) => ({
			...accumulated,
			[propName]: propCallback({ theme }),
		}),
		{}
	)

	return <Component {...props} {...themeProps} />
}

export default withTheme
