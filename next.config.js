const path = require("path")
const withCSS = require("@zeit/next-css")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
})

const SVGRule = {
	test: /\.svg$/,
	use: [
		{
			loader: "@svgr/webpack",
			options: { icon: true, svgo: false },
		},
	],
}

const srcDir = path.join(__dirname, "src")

module.exports = withBundleAnalyzer(
	withCSS({
		webpack(config) {
			// Resolve absolute imports
			config.resolve.alias = {
				...(config.resolve.alias || {}),
				"@": srcDir,
			}

			// Enable SVGs
			config.module.rules.push(SVGRule)

			// Deal with polyfills (?)
			const originalEntry = config.entry
			config.entry = async () => {
				const entries = await originalEntry()
				if (
					!!entries["main.js"] &&
					!entries["main.js"].includes("./client/polyfills.js")
				) {
					entries["main.js"].unshift("./client/polyfills.js")
				}
				return entries
			}

			return config
		},

		env: {
			API_URL: process.env.API_URL,
			OWN_URL: process.env.OWN_URL,
		},
	})
)
