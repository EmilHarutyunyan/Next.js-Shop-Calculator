// Third-party imports
import React from "react"
import axios from "axios"
import App from "next/app"
import { Provider as StoreProvider } from "react-redux"
import { ThemeProvider } from "styled-components"

// Global imports
import { withStore } from "@/redux/utils"
import "@/styles/cssfiles"
import GlobalStyling from "@/styles/global"
import theme from "@/styles/theme"
import { API_URL } from "@/config"
import AuthGuard from "@/components/auth/AuthGuard"
// Local imports

////////////////////////////////////////////////////////////////////////////////

axios.defaults.baseURL = API_URL
axios.defaults.withCredentials = true

class StaiyApp extends App {
	static async getInitialProps(appContext) {
		const appProps = await App.getInitialProps(appContext)
		return appProps
	}

	render() {
		const { Component, pageProps, store } = this.props

		return (
			// <StoreProvider store={store}>
			// 	<ThemeProvider theme={theme}>
			// 		<GlobalStyling>
			// 			<AuthGuard>
			// 				<Component {...pageProps} />
			// 			</AuthGuard>
			// 		</GlobalStyling>
			// 	</ThemeProvider>
			// </StoreProvider>

			<StoreProvider store={store}>
				<ThemeProvider theme={theme}>
					<GlobalStyling>
						{Component.requireAuth ? (
							<AuthGuard>
								<Component {...pageProps} />
							</AuthGuard>
						) : (
							<Component {...pageProps} />
						)}
					</GlobalStyling>
				</ThemeProvider>
			</StoreProvider>
		)
	}
}

export default withStore(StaiyApp)
