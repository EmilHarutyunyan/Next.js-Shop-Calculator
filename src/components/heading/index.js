import React from 'react'
// Style
import {Wrapper} from "./Heading.styles"
function Heading({ tag, text }) {
	const Tag = tag || 'h1'
	return (
		<Wrapper>
			<Tag>{text}</Tag>
		</Wrapper>
	)
	
}

export default Heading