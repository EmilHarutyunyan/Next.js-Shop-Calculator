// Third-party imports

// Global imports
import actionTypes from "@/redux/actionTypes"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const setAuthValues = authValues => ({
	type: actionTypes.auth.SET_AUTHENTICATE,
	payload: authValues,
})

export const setSignInValues = singInValues => {
	return {
		type: actionTypes.auth.SET_SIGNIN,
		payload: singInValues,
	}
}

export const setUserValues = userValues => {
	return {
		type: actionTypes.auth.SET_USER,
		payload: userValues,
	}
}
