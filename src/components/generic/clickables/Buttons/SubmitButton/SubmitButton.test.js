// Third-party imports
import React from "react"
import { shallow } from "enzyme"

// Global imports

// Local imports
import SubmitButton from "./SubmitButton"

////////////////////////////////////////////////////////////////////////////////

const setUp = (props = {}) => {
	return shallow(<SubmitButton {...props} />)
}

describe("SubmitButton", () => {
	test("render without error", () => {
		setUp()
	})

	test("it renders button text as a children", () => {
		const children = "Submit"
		const wrapper = setUp({ children })
		expect(wrapper.text()).toEqual(children)
	})

	test("onClick should be fire when clicked", () => {
		const mockOnClickFn = jest.fn()
		const wrapper = setUp({ onClick: mockOnClickFn })
		wrapper.simulate("click")
		expect(mockOnClickFn).toHaveBeenCalled()
	})
})
