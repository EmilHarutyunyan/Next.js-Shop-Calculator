// Third-party imports
import React from "react"
import { shallow } from "enzyme"

// Global imports

// Local imports
import Logo from "./Logo"
import { LogoImage } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const setUp = () => {
	return shallow(<Logo />)
}

describe("Logo", () => {
	test("render without error", () => {
		setUp()
	})
	test("it renders the logoImage", () => {
		const wrapper = setUp()
		const image = wrapper.find(LogoImage)
		expect(image.props().src).toEqual("/static/images/white-logo.svg")
	})
})
