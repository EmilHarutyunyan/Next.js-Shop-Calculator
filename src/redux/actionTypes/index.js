// Third-party imports

// Global imports

// Local imports
import formFieldsActionTypes from "./formFields"
import requestsActionTypes, { requestTypes } from "./requests"
import authActionTypes from "./auth"
import guardrobeActionTypes from "./guardrobe"
import calculatorActionTypes from "./calculator"

////////////////////////////////////////////////////////////////////////////////

const actionTypes = {
	formFields: formFieldsActionTypes,
	requests: requestsActionTypes,
	requestTypes: requestTypes,
	auth: authActionTypes,
	guardrobe: guardrobeActionTypes,
	calculator:calculatorActionTypes
	
}

export { requestNames } from "./requests"

export default actionTypes
