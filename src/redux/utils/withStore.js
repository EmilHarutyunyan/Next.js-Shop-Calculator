// Third-party imports
import React from "react"

// Global imports

// Local imports
import getOrCreateStore from "./getOrCreateStore"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function withStore
 * @category Redux
 * @subcategory Store
 * @description Higher-order component to add Redux to an App. Uses the getOrCreateStore function with the state present in the initial props of the App component to attach a Redux store to the App's props.
 * @param {object} App - A React App component.
 * @return {object} AppWithStore - A React App component with a Redux store injected in its props.
 */
const withStore = App => {
	return class AppWithStore extends React.Component {
		static async getInitialProps(appContext) {
			const store = getOrCreateStore()

			// Provide the store to getInitialProps of pages
			appContext.ctx.store = store

			let appProps = {}
			if (typeof App.getInitialProps === "function") {
				appProps = await App.getInitialProps(appContext)
			}

			return {
				...appProps,
				initialReduxState: store.getState(),
			}
		}

		constructor(props) {
			super(props)
			this.store = getOrCreateStore(props.initialReduxState)
		}

		render() {
			return <App {...this.props} store={this.store} />
		}
	}
}

export default withStore
