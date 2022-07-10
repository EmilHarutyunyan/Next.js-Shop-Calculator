// Third-party imports

// Global imports
import { requestsActions } from "@/redux/actions"
import actionTypes from "@/redux/actionTypes"
import * as guardrobeActions from "./actionCreators"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const fetchGuardrobe = token => async dispatch => {
	const success = response => {
		return dispatch(guardrobeActions.setGuardrobeValues(response.data))
	}

	const failure = error => {
		console.log(error)
	}

	return dispatch(
		requestsActions.request({
			actionType: actionTypes.requestTypes.FETCH_GUARDROBE,
			config: {
				method: "get",
				url: `b2c/guardrobe`,
				headers: { Authorization: `Bearer ${token}` },
			},
			success,
			failure,
		})
	)
}
