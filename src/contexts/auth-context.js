// src/context/auth-context.js
import React, { createContext } from "react"
import { useRouter } from "next/router"
import { useState } from "@storybook/addons"

const AuthContext = createContext()
const { Provider } = AuthContext
const AuthProvider = ({ children }) => {
	const [authState, setAuthState] = useState({
		token: "",
	})

	const setUserAuthInfo = ({ data }) => {
		const token = localStorage.setItem("token", data.data)

		setAuthState({
			token,
		})
	}

	// checks if the user is authenticated or not
	const isUserAuthenticated = () => {
		if (!authState.token) {
			return false
		}
	}

	return (
		<Provider
			value={{
				authState,
				setAuthState: userAuthInfo => setUserAuthInfo(userAuthInfo),
				isUserAuthenticated,
			}}
		>
			{children}
		</Provider>
	)
}

export { AuthContext, AuthProvider }
