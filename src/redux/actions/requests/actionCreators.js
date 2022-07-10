// Third-party imports

// Global imports
import { getError } from "@/lib/http"
import actionTypes from "@/redux/actionTypes"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const pendingCall = actionType => ({
	type: actionTypes.requests[`${actionType}_SET_PENDING`],
})

export const successCall = actionType => ({
	type: actionTypes.requests[`${actionType}_SET_SUCCESS`],
})

export const failedCall = (actionType, error) => ({
	type: actionTypes.requests[`${actionType}_SET_FAILED`],
	payload: {
		error: getError(error),
	},
})
