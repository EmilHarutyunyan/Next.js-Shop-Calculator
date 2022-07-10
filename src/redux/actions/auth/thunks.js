// Third-party imports

// Global imports
import { requestsActions } from "@/redux/actions"
import actionTypes from "@/redux/actionTypes"
import * as authActions from "./actionCreators"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const authenticate = values => async dispatch => {
	const success = response => {
		const auth = response.data
		return dispatch(authActions.setAuthValues(auth))
	}

	const failure = error => {
		console.log("VALUES", values, "\nERROR", error)
	}

	return dispatch(
		requestsActions.request({
			actionType: actionTypes.requestTypes.AUTHENTICATE,
			config: {
				method: "post",
				url: `/auth/b2c/signup`,
				data: values,
			},
			success,
			failure,
		})
	)
}

export const signIn = values => async dispatch =>
			dispatch(
				requestsActions.request({
					actionType: actionTypes.requestTypes.SIGNIN,
					config: {
						method: "post",
						url: `/auth/b2c/signin`,
						data: values,
					},
					success: response => {
						if (typeof window !== "undefined") {
							localStorage.setItem("JWTToken", response.data.jwt)
						}
						return dispatch(
							authActions.setSignInValues(response.data.customer)
						)
					},
					failure: error => {
						console.log("ERROR", error)
						// dispatch(authActions.setAuthError(error.response.code))
						// dispatch(authActions.clearAccountData())
					},
				})
			)

export const getUser = token => async dispatch =>
	dispatch(
		requestsActions.request({
			actionType: actionTypes.requestTypes.FETCH_USER,
			config: {
				method: "get",
				url: `/customer/me`,
				headers: { Authorization: `Bearer ${token}` },
			},
			success: response => {
				return dispatch(authActions.setUserValues(response.data))
			},
			failure: error => {
				console.log("ERROR", error)
				// dispatch(authActions.setAuthError(error.response.code))
				// dispatch(authActions.clearAccountData())
			},
		})
	)

export const confirmAccount = values => async dispatch =>
	dispatch(
		requestsActions.request({
			actionType: actionTypes.requestTypes.VERIFY_ACCOUNT,
			config: {
				method: "post",
				url: `/auth/b2c/verify`,
				data: values,
			},
			success: response => {
				return
				// return dispatch(authActions.setUserValues(response.data))
			},
			failure: error => {
				console.log("ERROR", error)
				// dispatch(authActions.setAuthError(error.response.code))
				// dispatch(authActions.clearAccountData())
			},
		})
	)
