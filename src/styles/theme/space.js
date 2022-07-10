// Third-party imports

// Global imports

// Local imports
import layout from "./layout"

////////////////////////////////////////////////////////////////////////////////

export const spacesInIntegers = [0, 4, 8, 16, 24, 32, 64, 72, 96, 144]

export const spacesInPixels = spacesInIntegers.map(spacing => `${spacing}px`)

const space = {
	...spacesInPixels,
	maxWidth: layout.maxWidth,
}

export default space
