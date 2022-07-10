// Third-party imports
import { get } from "lodash"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function getError
 * @category Lib
 * @description Extracts the error message out of an unsuccessful backend API call.
 * @param {object} err
 */
const getError = err => {
	const errorMessage = get(
		err,
		"response.data.error.message",
		String(err) || "An unknown error has occured."
	)
	return errorMessage === "Error: Network Error"
		? "Could not connect to the server!"
		: errorMessage
}

export default getError
