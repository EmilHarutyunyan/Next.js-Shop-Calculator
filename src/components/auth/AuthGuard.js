// Third-party imports
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useSelector, useDispatch } from "react-redux"
import { authActions } from "@/redux/actions"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

/**
 * @description In JavaScript code that is running both on the server and on the client (browser),
 * it is common practice to guard against with an if clause that checks if window is defined.
 * @param {Object} window  Is the root object provided by the browser for all the APIs that are provided by the browser.
 */
const checkWindowStatus = window => window !== "undefined"

/**
 * @function AuthGuard
 * @category Components
 * @subcategory Auth
 * @description Redirects the user to /login when they visit a page that requires authentication while not being authenticated.
 */
const AuthGuard = ({ children }) => {
	const router = useRouter()
	const dispatch = useDispatch()

	const [authorized, setAuthorized] = useState(false)

	/** Check if there is an id */
	const { _id } = useSelector(({ auth }) => auth)

	const url = router.asPath

	useEffect(() => {
		const token = checkWindowStatus(typeof window) && localStorage.getItem("JWTToken")
		dispatch(authActions.getUser(token))
		authCheck(url)
		// const hideContent = () => setAuthorized(false)
		// router.events.on("routeChangeStart", hideContent)
		return () => {
			// router.events.off("routeChangeStart", hideContent)
			// router.events.off("routeChangeComplete", authCheck)
		}
	}, [])

	function authCheck(url) {
		const publicPaths = ["/login"]
		const path = url.split("?")[0]
		
		// ! // if (!_id && !publicPaths.includes(path)) { 
		// ** vercum het berel
		if (!_id && !publicPaths.includes(path)) {
			
			router.push({ pathname: "/login" })
			setAuthorized(false)
		} else {
			router.push({
				pathname: url,
			})
			setAuthorized(true)
		}
	}

	return authorized && children
}

export default AuthGuard
