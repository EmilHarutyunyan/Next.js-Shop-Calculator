import React from "react"
import Header from "../header"

// Styles
import { Content, ContentItem,Layout } from "./Wrapper.styles"
function Wrapper({ children,iconColor, }) {
	return (
		<Layout>
			<Content>
				<Header color={iconColor}/>
				<ContentItem>{children}</ContentItem>
				
			</Content>
		</Layout>
	)
}

export default Wrapper
