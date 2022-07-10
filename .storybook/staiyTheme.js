// Third-party imports
import { create as createStorybookTheme } from "@storybook/theming"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const staiyTheme = createStorybookTheme({
	base: "light",
	//	 // UI
	//	 appBg: "white",
	appContentBg: "#eaebed",
	//	 appBorderColor: "grey",
	appBorderRadius: 5,
	// Typography
	//	 fontBase: ""Open Sans", sans-serif",
	//	 fontCode: "monospace",
	// Text colors
	//	 textColor: "black",
	//	 textInverseColor: "rgba(255,255,255,0.9)",
	// Toolbar default and active colors
	//	 barTextColor: "silver",
	//	 barSelectedColor: "black",
	//	 barBg: "#18ECC0",
	// Form colors
	//	 inputBg: "white",
	//	 inputBorder: "silver",
	//	 inputTextColor: "black",
	//	 inputBorderRadius: 4,
	// Brand
	brandTitle: "Staiy",
	brandUrl: "https://staiy.com/",
	brandImage: "https://staiy.com/static/images/logo.svg",
})

export default staiyTheme
