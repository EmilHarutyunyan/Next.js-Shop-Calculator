// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function isUndefinedOrNull
 * @category Lib
 * @description Determines if its argument is equal to undefined or null.
 * @param {any} variable - The variable to check for nullity or definedness.
 */
export const isUndefinedOrNull = variable => variable == null

/**
 * @function swapKeysAndValues
 * @category Lib
 * @description As the name says, swaps the keys and values of an object. If the values of the object are not strings, attempts to stringify them, so ideally used in the case where both keys and values are strings.
 * @param {object} obj - The JavaScript object containing the key-value pairs.
 */
export const swapKeysAndValues = obj =>
	Object.entries(obj).reduce((acc, curr) => {
		acc[curr[1]] = curr[0]
		return acc
	}, {})

/**
 * @description In JavaScript code that is running both on the server and on the client (browser),
 * it is common practice to guard against with an if clause that checks if window is defined.
 * @param {Object} window Global object that has the properties pertaining to the current DOM document
 */
export const checkWindowStatus = window => window !== "undefined"

/**
 * @description Returns the Json Web Token stored in local storage if present, previous verifying window state
 * @param {Object} window Global object that has the properties pertaining to the current DOM document
 * @returs {string | null}
 */
export const getJwtToken = window => {
	return checkWindowStatus(typeof window) && localStorage.getItem("JWTToken")
}
