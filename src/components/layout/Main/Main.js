// Third-party imports
import React from "react"

// Global imports

// Local imports
import { Container } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Main
 * @category Layout
 * @description Component wrapping the main content of the page for style purposes.
 */
const Main = ({ children }) => <Container as="main" className="xoski">{children}</Container>

export default Main
