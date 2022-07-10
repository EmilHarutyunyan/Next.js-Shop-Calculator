// Third-party imports

// Global imports
import actionTypes from "@/redux/actionTypes"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const setGuardrobeValues = guardrobeValues => {
	return {
		type: actionTypes.guardrobe.SET_GUARDROBE,
		payload: guardrobeValues,
	}
}
