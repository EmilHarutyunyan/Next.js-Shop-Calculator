// Third-party imports
import { useContext } from "react"
import { ThemeContext } from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const useTheme = () => {
	const theme = useContext(ThemeContext)

	return theme
}

export default useTheme
