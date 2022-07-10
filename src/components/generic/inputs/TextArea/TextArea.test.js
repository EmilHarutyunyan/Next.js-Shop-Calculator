import React from "react"
import { shallow } from "enzyme"

// Global imports

// Local imports
import TextArea from "./TextArea"
import { StyledTextArea, StyledLabel } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const setUp = (props = {}) => {
	return shallow(<TextArea {...props} />)
}

describe("TextArea", () => {
	test("render without error", () => {
		setUp()
	})
	test("it renders label", () => {
		const label = "Example"
		const wrapper = setUp({ label })
		const labelContainer = wrapper.find(StyledLabel)
		expect(labelContainer.text()).toEqual(label)
	})
	test("it passes name and placeholder as a prop", () => {
		const name = "testArea"
		const placeholder = "Insert content here"
		const wrapper = setUp({ name, placeholder })
		const textAreaInput = wrapper.find(StyledTextArea)
		expect(textAreaInput.props().name).toEqual(name)
		expect(textAreaInput.props().placeholder).toEqual(placeholder)
	})

	test("it should change value when onChange is called", () => {
		const mockOnChangeFn = jest.fn()
		const wrapper = setUp({
			onChange: mockOnChangeFn,
		})
		const event = {
			target: {
				value: "Testing changes in value",
			},
		}
		const input = wrapper.find(StyledTextArea)
		input.simulate("change", event)
		expect(mockOnChangeFn).toHaveBeenCalledWith("Testing changes in value")
	})
})
