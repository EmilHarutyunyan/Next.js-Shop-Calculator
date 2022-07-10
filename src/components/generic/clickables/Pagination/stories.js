// Third-party imports
import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import styled from "styled-components"
import centered from "@storybook/addon-centered/react"

// Global imports

// Local imports
import Pagination from "./Pagination"

////////////////////////////////////////////////////////////////////////////////

const Background = styled.div`
	background-color: ${({ theme }) => theme.colors.lightBlack};
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
`

const BoundingBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid white;
`

const Component = ({ numberOfPages, initialPage = 1 }) => {
	// Hooks
	const [currentPage, setCurrentPage] = useState(initialPage)

	// Props
	const paginationProps = {
		onPreviousPageClick: () => {
			action("Previous Page")()
			if (currentPage > 1) {
				setCurrentPage(currentPage - 1)
			}
		},
		onNextPageClick: () => {
			action("Next Page")()
			if (currentPage < numberOfPages) {
				setCurrentPage(currentPage + 1)
			}
		},
		canNextPage: currentPage < numberOfPages,
		canPreviousPage: currentPage > 1,
		currentPage,
		numberOfPages,
	}

	return (
		<BoundingBox>
			<Pagination {...paginationProps} />
		</BoundingBox>
	)
}

storiesOf("Generic|Pagination", module)
	.addDecorator(centered)
	.addDecorator(Story => (
		<Background>
			<Story />
		</Background>
	))
	// 5 Pages
	.add("1 page, renders nothing", () => <Component numberOfPages={1} initialPage={1} />)
	.add("5 pages, initial page 1", () => <Component numberOfPages={5} initialPage={1} />)
	.add("5 pages, initial page 3", () => <Component numberOfPages={5} initialPage={3} />)
	.add("5 pages, initial page 5", () => <Component numberOfPages={5} initialPage={5} />)
	// 10 Pages
	.add("10 pages, initial page 1", () => (
		<Component numberOfPages={10} initialPage={1} />
	))
	.add("10 pages, initial page 10", () => (
		<Component numberOfPages={10} initialPage={10} />
	))
	// 100 Pages
	.add("100 pages, initial page 1", () => (
		<Component numberOfPages={100} initialPage={1} />
	))
	.add("100 pages, initial page 10", () => (
		<Component numberOfPages={100} initialPage={10} />
	))
	.add("100 pages, initial page 100", () => (
		<Component numberOfPages={100} initialPage={100} />
	))
	// 1000 Pages
	.add("1000 pages, initial page 1", () => (
		<Component numberOfPages={1000} initialPage={1} />
	))
	.add("1000 pages, initial page 10", () => (
		<Component numberOfPages={1000} initialPage={10} />
	))
	.add("1000 pages, initial page 100", () => (
		<Component numberOfPages={1000} initialPage={100} />
	))
	.add("1000 pages, initial page 1000", () => (
		<Component numberOfPages={1000} initialPage={1000} />
	))
