// Third-party imports
import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import centered from "@storybook/addon-centered/react"

// Global imports
import { Flex } from "@/components/generic"

// Local imports
import Logo from "./Logo"

////////////////////////////////////////////////////////////////////////////////

const LogoContainer = styled(Flex)`
	width: 200px;
	height: 100px;
	background-color: ${({ theme }) => theme.colors.black};
	justify-content: center;
	align-items: center;
`

storiesOf("Generic|Logo", module)
	.addDecorator(Story => (
		<LogoContainer>
			<Story />
		</LogoContainer>
	))
	.addDecorator(centered)
	.add("Logo", () => <Logo />)
