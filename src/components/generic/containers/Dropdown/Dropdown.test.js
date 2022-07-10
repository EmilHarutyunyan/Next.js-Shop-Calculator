import React from "react"
import { shallow } from "enzyme"
import { ThemeContext } from "styled-components"
import theme from "@/styles/theme"

// Global imports
import { Icon } from "@/components/generic"

// Local imports
import Dropdown from "./Dropdown"
import { Header, ContentContainer } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const shallowWithTheme = children => {
	ThemeContext._currentValue = theme
	return shallow(children)
}

const setUp = (props = {}) => {
	return shallowWithTheme(<Dropdown {...props} />)
}

describe("Dropdown", () => {
	test("render without error", () => {
		setUp()
	})

	test("it renders children", () => {
		const children = "hello from the other side"
		const wrapper = setUp({ children })
		const content = wrapper.find("div")
		expect(content.text()).toContain(children)
	})
	test("it renders title and icon", () => {
		const title = "Dropdown"
		const wrapper = setUp({ title })
		const header = wrapper.find(Header)
		const children = header.props().children
		expect(children).toHaveLength(2)
		expect(header.find(Icon).exists()).toBe(true)
		expect(header.text()).toEqual(title)
	})
	test("dropdown is not open", () => {
		const wrapper = setUp()
		const contentContainer = wrapper.find(ContentContainer).prop("style")
		expect(contentContainer).toHaveProperty("height.value", 0)
	})
	describe("onClick is fired", () => {
		const mockOnClickFn = jest.fn()
		const wrapper = setUp({
			onDropdownClick: mockOnClickFn,
		})
		const header = wrapper.find(Header)
		header.simulate("click")
		expect(mockOnClickFn).toHaveBeenCalled()
	})
})
