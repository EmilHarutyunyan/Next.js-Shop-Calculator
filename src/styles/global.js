// Third-party imports
import React from "react"
import { createGlobalStyle } from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "TradeGothic";
	src: url("/static/fonts/TradeGothicLTPro-Bold.eot");
	src: url("/static/fonts/TradeGothicLTPro-Bold.eot?#iefix") format("embedded-opentype"),
		url("/static/fonts/TradeGothicLTPro-Bold.woff2") format("woff2"),
		url("/static/fonts/TradeGothicLTPro-Bold.woff") format("woff"),
		url("/static/fonts/TradeGothicLTPro-Bold.ttf") format("truetype");
	font-weight: bold;
	font-style: normal;
}

@font-face {
	font-family: "Graphik";
	src: url("/static/fonts/Graphik-SemiboldItalic.eot");
	src: url("/static/fonts/Graphik-SemiboldItalic.eot?#iefix")
			format("embedded-opentype"),
		url("/static/fonts/Graphik-SemiboldItalic.woff2") format("woff2"),
		url("/static/fonts/Graphik-SemiboldItalic.woff") format("woff"),
		url("/static/fonts/Graphik-SemiboldItalic.ttf") format("truetype");
	font-weight: 600;
	font-style: italic;
}

@font-face {
	font-family: "Graphik";
	src: url("/static/fonts/Graphik-Medium.eot");
	src: url("/static/fonts/Graphik-Medium.eot?#iefix") format("embedded-opentype"),
		url("/static/fonts/Graphik-Medium.woff2") format("woff2"),
		url("/static/fonts/Graphik-Medium.woff") format("woff"),
		url("/static/fonts/Graphik-Medium.ttf") format("truetype");
	font-weight: 500;
	font-style: normal;
}

@font-face {
	font-family: "Graphik";
	src: url("/static/fonts/Graphik-Semibold.eot");
	src: url("/static/fonts/Graphik-Semibold.eot?#iefix") format("embedded-opentype"),
		url("/static/fonts/Graphik-Semibold.woff2") format("woff2"),
		url("/static/fonts/Graphik-Semibold.woff") format("woff"),
		url("/static/fonts/Graphik-Semibold.ttf") format("truetype");
	font-weight: 600;
	font-style: normal;
}

@font-face {
	font-family: "Graphik";
	src: url("/static/fonts/Graphik-RegularItalic.eot");
	src: url("/static/fonts/Graphik-RegularItalic.eot?#iefix") format("embedded-opentype"),
		url("/static/fonts/Graphik-RegularItalic.woff2") format("woff2"),
		url("/static/fonts/Graphik-RegularItalic.woff") format("woff"),
		url("/static/fonts/Graphik-RegularItalic.ttf") format("truetype");
	font-weight: normal;
	font-style: italic;
}

@font-face {
	font-family: "Graphik";
	src: url("/static/fonts/Graphik-Regular.eot");
	src: url("/static/fonts/Graphik-Regular.eot?#iefix") format("embedded-opentype"),
		url("/static/fonts/Graphik-Regular.woff2") format("woff2"),
		url("/static/fonts/Graphik-Regular.woff") format("woff"),
		url("/static/fonts/Graphik-Regular.ttf") format("truetype");
	font-weight: normal;
	font-style: normal;
}

@font-face {
	font-family: "Basic-Sans";
	src: url("/static/fonts/BasicSans-Regular.woff2") format("woff2");
	font-weight: 400;
	font-style: normal;
}
@font-face {
	font-family: "Basic-Sans";
	src: url("/static/fonts/BasicSans-Bold.woff2") format("woff2");
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: "Tiempos";
	src: url("/static/fonts/TiemposHeadline-Medium.otf");
	font-weight: 500;
	font-style: normal;
}

@font-face {
	font-family: "Tiempos";
	src: url("/static/fonts/TiemposHeadline-Regular.otf");
	font-weight: 400;
	font-style: normal;
}
html {
	 scroll-behavior: smooth;
}
	html, body {
		font-family: 'Basic-Sans';
		font-weight: 500;
		box-sizing: border-box;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-height: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: 0;
		padding: 0;
		color: ${({ theme }) => theme.colors.black0};
		font-size: 18px;
		line-height: 1.6;	



		::-webkit-scrollbar {
			width: 8px;
		}
		::-webkit-scrollbar-track {
			background: #f1f1f1; 
		}
		::-webkit-scrollbar-thumb {
			background: #323536; 
			border-radius:3px;
		}
		::-webkit-scrollbar-thumb:hover {
			background: #ee7444; 
		} 	
	}

	#__next {
		min-height: 100%;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	a {
		color: #fff;
		text-decoration: none;
	}

	
/* hide arrows
 Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0 !important;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield !important;
}

`

const GlobalStyling = ({ children }) => (
	<>
		<GlobalStyle />
		{children}
	</>
)

export default GlobalStyling
