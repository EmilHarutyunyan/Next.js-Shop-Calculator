// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function capitalize
 * @category Lib
 * @description Capitalizes a string.
 * @param {string} word - The string to capitalize.
 */
const capitalize = word => `${word[0].toUpperCase()}${word.slice(1)}`

/**
 * @function snakeToCamelCase
 * @category Lib
 * @description Converts snake-case strings to camel-case strings, e.g. FETCH_BRANDS to fetchBrands.
 * @param {string} word - The string to convert from snake-case to camel-case.
 */
export const snakeToCamelCase = word =>
	word
		.split("_")
		.map(w => w.toLowerCase())
		.map((w, idx) => (idx > 0 ? capitalize(w) : w))
		.join("")

/**
 * @function camelToSnakeCase
 * @category Lib
 * @description Converts camel-case strings to snake-case strings, e.g. fetchBrands to FETCH_BRANDS.
 * @param {string} word - The string to convert from camel-case to snake-case.
 */
export const camelToSnakeCase = word =>
	word.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`).toUpperCase()
