// Third-party imports
import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

	render() {
		return (
			<Html lang="en">
				<Head>
					{/* <link rel="stylesheet" type="text/css" href="/static/nprogress.css" /> */}
					<link rel="manifest" href="/static/manifest.json" />
					<link
						href="//db.onlinewebfonts.com/c/927699cb752d1b76650593a4ad6710b8?family=Basic+Sans+Regular"
						rel="stylesheet"
						type="text/css"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/static/favicon/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/static/favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/static/favicon/favicon-16x16.png"
					/>
					<link
						rel="mask-icon"
						href="/static/favicon/safari-pinned-tab.svg"
						color="#098691"
					/>

					{/* <script id="stripe-js" src="https://js.stripe.com/v3/" /> */}
				</Head>
				<body>
					{/* Commented out Google Manager Tag noscript, see below */}
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
