import React from "react"
import { shallow } from "enzyme"

// Global imports
import { Icon } from "@/components/generic"

// Local imports
import SearchInput from "./SearchInput"
import { StyledInput } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const setUp = (props = {}) => {
	return shallow(<SearchInput {...props} />)
}

describe("SearchInput", () => {
	test("render without error", () => {
		setUp()
	})

	test("it render Icon", () => {
		const wrapper = setUp()
		expect(wrapper.find(Icon).exists()).toBe(true)
	})
	test("it passes placeholder as a prop", () => {
		const placeholderText = "Search"
		const wrapper = setUp({ placeholderText })
		const input = wrapper.find(StyledInput)
		expect(input.props().placeholder).toEqual(placeholderText)
	})
	test("it should change value when onChange is called", () => {
		const mockOnChangeFn = jest.fn()
		const wrapper = setUp({
			change: mockOnChangeFn,
		})
		const event = {
			target: {
				value: "Testing changes in value",
			},
		}
		const input = wrapper.find(StyledInput)
		input.simulate("change", event)
		expect(mockOnChangeFn).toHaveBeenCalledWith("Testing changes in value")
	})
})
