// Third-party imports
import React from "react"
import { Provider as StoreProvider } from "react-redux"

// Global imports
import { withStore } from "@/redux/utils"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const ReduxStoreProvider = withStore(({ children, store }) => (
	<StoreProvider store={store}>{children}</StoreProvider>
))

/**
 * @function ReduxDecorator
 * @category Storybook
 * @subcategory Decorators
 * @description Wraps a story with a redux StoreProvider from the react-redux library to enable using the redux store in stories.
 */
const ReduxDecorator = Story => (
	<ReduxStoreProvider>
		<Story />
	</ReduxStoreProvider>
)

export default ReduxDecorator
