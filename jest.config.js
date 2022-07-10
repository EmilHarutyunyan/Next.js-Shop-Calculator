module.exports = {
	setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.js"],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1",
		"\\.css$": "identity-obj-proxy",
	},
}
