// Third-party imports

// Global imports
import actionTypes, { requestNames } from "@/redux/actionTypes"

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @constant actionReducers
 * @category Redux
 * @subcategory Requests
 * @description Object containing the action reducers, namely the individual functions that have the task of reducing each action when the given action type is sent to the requests reducer.
 * Reminder:
 * THIS_IS_SNAKE_CASE
 * thisIsCamelCase
 */
const actionReducers = Object.entries(requestNames).reduce(
	(accumulated, [snakeCaseRequestName, camelCaseRequestName]) => ({
		...accumulated,
		[actionTypes.requests[`${snakeCaseRequestName}_SET_PENDING`]]: draft => {
			draft[camelCaseRequestName] = {
				pending: true,
				success: null,
				error: null,
			}
		},
		[actionTypes.requests[`${snakeCaseRequestName}_SET_SUCCESS`]]: draft => {
			draft[camelCaseRequestName] = {
				pending: false,
				success: true,
				error: null,
			}
		},
		[actionTypes.requests[`${snakeCaseRequestName}_SET_FAILED`]]: (draft, action) => {
			draft[camelCaseRequestName] = {
				pending: false,
				success: false,
				error: action.payload.error || null,
			}
		},
	}),
	{}
)

export default actionReducers
