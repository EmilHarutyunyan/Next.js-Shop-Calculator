// Third-party imports

// Global imports
import { snakeToCamelCase } from "@/lib"

// Local imports
import { requestTypes as formFieldsRequestTypes } from "./formFields"
import { requestTypes as authRequestTypes } from "./auth"
import { requestTypes as guardrobeRequestTypes } from "./guardrobe"
import { requestTypes as calculatorRequestTypes } from "./calculator"

////////////////////////////////////////////////////////////////////////////////

export const requestTypes = {
	...formFieldsRequestTypes,
	...authRequestTypes,
	...guardrobeRequestTypes,
	...calculatorRequestTypes,
}

export const requestNames = Object.keys(requestTypes).reduce(
	(accumulated, current) => ({
		...accumulated,
		[current]: snakeToCamelCase(current),
	}),
	{}
)

/**
 * @constant requestsActionTypes
 * @category Redux
 * @description Action types for the actions related to backend API calls.
 */
const requestsActionTypes = Object.keys(requestTypes).reduce(
	(accumulated, current) => ({
		...accumulated,
		[`${current}_SET_PENDING`]: `${current}_SET_PENDING`,
		[`${current}_SET_SUCCESS`]: `${current}_SET_SUCCESS`,
		[`${current}_SET_FAILED`]: `${current}_SET_FAILED`,
	}),
	{}
)

export default requestsActionTypes
