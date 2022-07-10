// Third-party imports

// Global imports
import actionTypes from "@/redux/actionTypes"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const guardrobeActionReducers = {
	[actionTypes.guardrobe.SET_GUARDROBE]: (draft, action) => {
		draft.guardrobe = action.payload
	},
}

export default guardrobeActionReducers
