// Third-party imports
import { combineReducers } from "redux"

// Global imports
import { createReducer } from "@/redux/utils"

// Local imports
import { requestsReducers, requestsState } from "./requests"
import { formFieldsReducers, formFieldsState } from "./formFields"
import { authActionReducers, authState } from "./auth"
import { guardrobeActionReducers, guardrobeState } from "./guardrobe"
import { calculatorActionReducers, calculatorState } from "./calculator"
////////////////////////////////////////////////////////////////////////////////

const rootReducer = combineReducers({
	requests: createReducer(requestsReducers, requestsState),
	formFields: createReducer(formFieldsReducers, formFieldsState),
	auth: createReducer(authActionReducers, authState),
	guardrobe: createReducer(guardrobeActionReducers, guardrobeState),
	calculator: createReducer(calculatorActionReducers, calculatorState),
})

export default rootReducer
