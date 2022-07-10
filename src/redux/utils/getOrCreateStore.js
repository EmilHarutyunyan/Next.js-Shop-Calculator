// Third-party imports

// Global imports

// Local imports
import createConfiguredStore from "./createConfiguredStore"

////////////////////////////////////////////////////////////////////////////////

const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__"
const runningOnServerSide = typeof window === "undefined"

/**
 * @function getOrCreateStore
 * @category Redux
 * @subcategory Store
 * @description Retrieves a Redux store.
 * On the client side:
 * 	Retrieves the store from the window object if present. Creates a store if no store is available on the window object.
 * On the server side:
 * 	Creates a store. The server always needs to generate a fresh store for the HTML document to be served.  This prevents that store from being shared between requests.
 * @param {object} [initialState] - The state to initialize the store with if it has to be created.
 * @return {object} A Redux store object.
 */
const getOrCreateStore = initialState => {
	// Server side
	if (runningOnServerSide) {
		return createConfiguredStore(initialState)
	}

	// Client side
	if (!window[__NEXT_REDUX_STORE__]) {
		window[__NEXT_REDUX_STORE__] = createConfiguredStore(initialState)
		return window[__NEXT_REDUX_STORE__]
	} else {
		return window[__NEXT_REDUX_STORE__]
	}
}

export default getOrCreateStore
