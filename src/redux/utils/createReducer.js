// Third-party imports
import produce from "immer"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @function createReducer
 * @category Redux
 * @subcategory Reducers
 * @description Generates a reducer from an object of reducing functions indexed by action types and an initial state. The reducing functions are assumed to be processed by the 'produce' function of the 'immer' library.
 * @param {object} actionReducers - Keys are action types, values are reducing functions.
 * @param {object} initialState - The initial state of the reducer.
 */
const createReducer = (actionReducers, initialState) =>
	// The reducer
	
	(state = initialState, action) =>
		!!actionReducers[action.type]
			? produce(state, draft => {
					
					actionReducers[action.type](draft, action)
			  })
			: state

export default createReducer
