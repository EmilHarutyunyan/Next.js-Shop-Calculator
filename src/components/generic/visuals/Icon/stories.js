// Third-party imports
import React from "react"
import styled from "styled-components"
import { get } from "lodash"
import { storiesOf } from "@storybook/react"
import centered from "@storybook/addon-centered/react"

// Global imports
import { Flex } from "@/components/generic"

// Local imports
import Icon from "./Icon"

////////////////////////////////////////////////////////////////////////////////

const IconContainer = styled(Flex)`
	width: 50px;
	height: 50px;
	background-color: ${({ backgroundColor, theme }) =>
		get(theme.colors, backgroundColor, theme.colors.white)};
	justify-content: center;
	align-items: center;
`

storiesOf("Generic|Icon/white background", module)
	.addDecorator(Story => (
		<IconContainer backgroundColor="white">
			<Story />
		</IconContainer>
	))
	.addDecorator(centered)
	.add("User", () => <Icon iconFilename="user" />)
	.add("Bookmark", () => <Icon iconFilename="bookmark" />)
	.add("Water", () => <Icon iconFilename="water" />)
	.add("Air", () => <Icon iconFilename="air" />)
	.add("Materials", () => <Icon iconFilename="materials" />)
	.add("Workers", () => <Icon iconFilename="workers" />)
	.add("Commitment", () => <Icon iconFilename="commitment" />)
	.add("Big bookmark", () => <Icon fontSize="40px" iconFilename="bookmark" />)

storiesOf("Generic|Icon/black background", module)
	.addDecorator(Story => (
		<IconContainer backgroundColor="black">
			<Story />
		</IconContainer>
	))
	.addDecorator(centered)
	.add("Pages", () => <Icon iconFilename="page" />)
	.add("Settings", () => <Icon iconFilename="wheel" />)
	.add("Collections", () => <Icon iconFilename="collections" />)
	.add("Admin", () => <Icon iconFilename="admins" />)
	.add("Notifications", () => <Icon iconFilename="bell" />)
	.add("My Profile", () => <Icon iconFilename="profile" />)
	.add("Logout", () => <Icon iconFilename="logout" />)
	.add("Site section selected", () => <Icon iconFilename="angle-right-white" />)
	.add("Big red cross", () => (
		<Icon iconFilename="cross" size="20px" iconColor="tomato" />
	))
	.add("Small white cross", () => (
		<Icon iconFilename="cross" size="10px" iconColor="white" />
	))
