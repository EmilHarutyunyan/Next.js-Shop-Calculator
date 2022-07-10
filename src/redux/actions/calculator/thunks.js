
import { requestsActions } from "@/redux/actions"
import actionTypes from "@/redux/actionTypes"
import * as calculatorActions from "./actionCreators"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const fetchCalculator = token => async dispatch => {
	const success = response => {
		console.log(response.data,"calculator")
		// return dispatch(calculatorActions.setGuardrobeValues(response.data))
	}

	const failure = error => {
		console.log(error)
	}

	return dispatch(
		requestsActions.request({
			actionType: actionTypes.requestTypes.FETCH_CALCULATOR,
			config: {
				method: "post",
				url: `b2c/footprint/`,
				headers: { Authorization: `Bearer ${token}` },
			},
			success,
			failure,
		})
	)
}