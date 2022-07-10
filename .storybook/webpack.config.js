const path = require("path")

const CopyWebpackPlugin = require("copy-webpack-plugin")

const copyWebpackPlugin = new CopyWebpackPlugin({
	patterns: [
		{
			from: path.resolve(__dirname, "../public/static"),
			to: "./static"
		}
	]
})

const SVGRule = {
	test: /\.svg$/,
	use: [
		{
			loader: "@svgr/webpack",
			options: {
				icon: true,
				svgo: true
			}
		}
	]
}
const srcDir = path.resolve(__dirname, "..", "src")

module.exports = async ({ config }) => {
	// Resolve absolute imports
	config.resolve.alias = {
		...(config.resolve.alias || {}),
		"@": srcDir
	}

	// Copy static assets from next.js when building storybook
	config.plugins.push(copyWebpackPlugin)

	// Enable SVGs
	config.module.rules.push(SVGRule)

	return config
}
