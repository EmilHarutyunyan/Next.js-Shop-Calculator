// Third-party imports

// Global imports

// Local imports
import { requestNames } from "@/redux/actionTypes"

////////////////////////////////////////////////////////////////////////////////

/**
 * @constant initialRequestState
 * @category Redux
 * @subcategory Requests
 * @description Initial redux state for a request in the requests Reducer
 * @param {boolean} pending - Status of the API call
 * @param {boolean} success - Determines the success of the API call after it is finished.
 * @param {string} error - Log of the API call error message if applicable.
 */
const initialRequestState = {
	pending: null,
	success: null,
	error: null,
}

const initialState = Object.values(requestNames).reduce(
	(accumulated, current) => ({
		...accumulated,
		[current]: { ...initialRequestState },
	}),
	{}
)

export default initialState
