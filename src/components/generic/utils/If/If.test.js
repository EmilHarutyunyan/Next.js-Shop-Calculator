import React from "react"
import { shallow } from "enzyme"

// Global imports

// Local imports
import If from "./If"

////////////////////////////////////////////////////////////////////////////////

const setUp = (props = {}) => {
	return shallow(<If {...props} />)
}

describe("If", () => {
	it("should return null when the condition fails", () => {
		const wrapper = setUp({ condition: false })
		expect(wrapper.html()).toBe(null)
	})

	it("should render the component only when the condition passes", () => {
		const wrapper = setUp({ condition: true })
		expect(wrapper.isEmptyRender()).toEqual(false)
	})
})
