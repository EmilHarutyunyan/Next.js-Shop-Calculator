// Third-party imports
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

// Global imports

// Local imports
import rootReducer from "@/redux/reducers"

////////////////////////////////////////////////////////////////////////////////

const defaultInitialState = {}

/**
 * @function createConfiguredStore
 * @category Redux
 * @subcategory Store
 * @description Creates a configured Redux store from a given initial state.
 * Composes the enhancers with the standard compose function from Redux if the Redux Devtools Extension is not available in the window.
 * Composes the enhancers with the Redux Devtools Extension compose function if the Redux Devtools Extension is available in the window.
 * @param {object} [initialState={}] - An arbitrary JavaScript object representing the initial state of the Redux store. Defaults tot eh
 * @return {object} A Redux store object.
 */
const createConfiguredStore = (initialState = defaultInitialState) => {
	// Setup middleware; the only one we need now is thunk to enable async actions
	const middleware = [thunk]

	// Boolean determining if ReduxDevtools is present
	const isReduxDevtoolsAvailable =
		process.env.NODE_ENV === "development" &&
		typeof window !== "undefined" &&
		!!window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

	const composeEnhancers = isReduxDevtoolsAvailable
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose

	const enhancers = composeEnhancers(applyMiddleware(...middleware))

	return createStore(rootReducer, initialState, enhancers)
}

export default createConfiguredStore
