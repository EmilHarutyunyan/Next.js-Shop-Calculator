// Third-party imports
import { action } from "@storybook/addon-actions"
import Router, * as router from "next/router"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const mockedRouter = {
	push: (path, ...args) => {
		action("navigated to")(path, ...args)
		return new Promise((resolve, _) => resolve(...args))
	},
	replace: (path, ...args) => {
		action("replaced url to")(path, ...args)
		return new Promise((resolve, _) => resolve(...args))
	},
	reload: (path, ...args) => {
		action("reload path")(path, ...args)
		return new Promise((resolve, _) => resolve(...args))
	},
	back: (path, ...args) => {
		action("went back from")(path, ...args)
		return new Promise((resolve, _) => resolve(...args))
	},
	events: {
		emit: (...args) => action("emitted event")(...args),
	},
	prefetch: () => {},
	asPath: "path",
	route: "route",
	pathname: "pathName",
	query: {},
}

router.useRouter = () => mockedRouter
Router.router = mockedRouter
