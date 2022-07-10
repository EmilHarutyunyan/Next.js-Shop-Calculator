// Third-party imports
import React from "react"
import styled from "styled-components"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import centered from "@storybook/addon-centered/react"

// Global imports

// Local imports
import Dropdown from "./Dropdown"

////////////////////////////////////////////////////////////////////////////////

const Background = styled.div`
	background-color: ${({ theme }) => theme.colors.lightBlack};
	width: 100%;
	height: 100vh;
`

const LoremIpsum = () => (
	<p style={{ fontSize: "14px" }}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at augue laoreet,
		eleifend turpis a, tincidunt velit. Curabitur vitae felis sit amet arcu blandit
		pellentesque quis vitae odio. Aenean pharetra eu felis non suscipit. Etiam
		fermentum enim sit amet magna scelerisque, eu mattis ligula tristique. Aliquam sed
		cursus odio, sit amet condimentum eros. Proin molestie commodo urna, eget accumsan
		tellus laoreet ut. Morbi id est eu lorem tempor cursus. Aenean vitae ultrices sem.
		Phasellus venenatis velit in ultrices interdum. Cras semper, justo a maximus
		iaculis, nisl metus luctus nisl, ac sodales odio mauris et ante. Donec ipsum est,
		auctor a lorem ac, rutrum elementum magna.
	</p>
)

storiesOf("Generic|Dropdown", module)
	.addDecorator(Story => (
		<div style={{ width: "500px", height: "1000px", paddingTop: "50px" }}>
			<Story />
		</div>
	))
	.addDecorator(centered)
	.addDecorator(Story => (
		<Background>
			<Story />
		</Background>
	))
	.add("One Dropdown", () => {
		const dropdownProps = {
			onDropdownClick: isShown => {
				action(isShown ? "onClose" : "onOpen")(
					isShown ? "dropdown close" : "dropdown open"
				)
			},
			title: <strong>Header</strong>,
		}
		return (
			<Dropdown {...dropdownProps}>
				<LoremIpsum />
			</Dropdown>
		)
	})
	.add("Two Dropdowns", () => {
		const dropdownProps = {
			onDropdownClick: isShown => {
				action(isShown ? "onClose" : "onOpen")(
					isShown ? "dropdown close" : "dropdown open"
				)
			},
			title: <strong>Header</strong>,
		}
		return (
			<>
				<Dropdown {...dropdownProps}>
					<LoremIpsum />
				</Dropdown>
				<div style={{ height: "14px" }} />
				<Dropdown {...dropdownProps}>
					<LoremIpsum />
				</Dropdown>
			</>
		)
	})
	.add("Nested Dropdowns", () => {
		const dropdownProps = {
			onDropdownClick: isShown => {
				action(isShown ? "onClose" : "onOpen")(
					isShown ? "dropdown close" : "dropdown open"
				)
			},
			title: <strong>Header</strong>,
		}
		return (
			<Dropdown {...dropdownProps}>
				<Dropdown {...dropdownProps}>
					<LoremIpsum />
				</Dropdown>
				<Dropdown {...dropdownProps}>
					<LoremIpsum />
					<LoremIpsum />
				</Dropdown>
				<LoremIpsum />
			</Dropdown>
		)
	})
