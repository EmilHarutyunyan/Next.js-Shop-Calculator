// Third-party imports
import React from "react"

// Global imports

// Local imports
import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"

////////////////////////////////////////////////////////////////////////////////

const Layout = ({ title, children, footerChildren, headerChildren }) => (
	<>
		<Header title={title}>{headerChildren}</Header>
		<Main>{children}</Main>
		<Footer>{footerChildren}</Footer>
	</>
)

export default Layout
