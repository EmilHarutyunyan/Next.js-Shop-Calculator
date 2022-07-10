const merge = require("lodash/fp/merge")
const defaultConfig = require("./dev")

const API_URL = process.env.API_URL || "https://api-prod.staiy.com/"
const OWN_URL = process.env.OWN_URL || "https://footprint.staiy.com/"

module.exports = merge(defaultConfig, {
	API_URL,
	OWN_URL,
	app: {
		titleTemplate: "%s - Footprint evaluator",
	},
})
