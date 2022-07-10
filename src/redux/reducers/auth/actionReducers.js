// Third-party imports

// Global imports
import actionTypes from "@/redux/actionTypes"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const authActionReducers = {
	[actionTypes.auth.AUTHENTICATE]: (draft, action) => {
		draft._id = action.payload._id
		draft.email = action.payload.email
	},

	[actionTypes.auth.SET_SIGNIN]: (draft, action) => {
		draft.jwt = action.payload.jwt
		draft._id = action.payload._id
		draft.email = action.payload.email
	},

	[actionTypes.auth.SET_USER]: (draft, action) => {
		draft._id = action.payload._id
		draft.email = action.payload.email
	},
}

export default authActionReducers
