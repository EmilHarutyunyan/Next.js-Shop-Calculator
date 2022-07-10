import React from "react"
import { shallow, mount } from "enzyme"

// Global imports

// Local imports
import Pagination from "./Pagination"

////////////////////////////////////////////////////////////////////////////////

const setUp = (props = {}) => {
	return shallow(<Pagination {...props} />)
}

describe("Pagination", () => {
	test("render without error", () => {
		setUp()
	})

	test("is empty when numberOfPages <= 1", () => {
		const wrapper = mount(<Pagination numberOfPages={1} />)
		expect(wrapper.isEmptyRender()).toEqual(true)
	})

	test("right ArrowButton visable when canNextPage true", () => {
		const wrapper = setUp({ canNextPage: true })
		const nextArrowButton = wrapper.find("ArrowButton").find({ direction: "right" })
		expect(nextArrowButton.props()["enabled"]).toBeTruthy()
	})

	test("left ArrowButton visable when canPreviousPage true", () => {
		const wrapper = setUp({ canPreviousPage: true })
		const prevtArrowButton = wrapper.find("ArrowButton").find({ direction: "left" })
		expect(prevtArrowButton.props()["enabled"]).toBeTruthy()
	})

	test("onClick should be fired when clicking in the nextArrowButton ", () => {
		const mockOnClickFn = jest.fn()
		const wrapper = setUp({ onNextPageClick: mockOnClickFn })
		const nextArrowButton = wrapper.find("ArrowButton").find({ direction: "right" })
		nextArrowButton.simulate("click")
		expect(mockOnClickFn).toHaveBeenCalled()
	})

	test("onClick should be fired when clicking in the prevArrowButton ", () => {
		const mockOnClickFn = jest.fn()
		const wrapper = setUp({ onPreviousPageClick: mockOnClickFn })
		const prevArrowButton = wrapper.find("ArrowButton").find({ direction: "left" })
		prevArrowButton.simulate("click")
		expect(mockOnClickFn).toHaveBeenCalled()
	})
})
