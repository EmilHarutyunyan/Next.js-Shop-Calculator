// Third-party imports
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import styled from "styled-components"

// Global imports
import { SearchInput, Pagination } from "@/components/generic"
import { TableProvider, useTableState } from "@/contexts"

// Local imports
import { PaginationContainer, GlobalFilterContainer, Container } from "./styles"
import FrontendTable from "./FrontendTable"
import data from "../data.json"
import columns from "../columns.json"

////////////////////////////////////////////////////////////////////////////////

const CenteringContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
`

storiesOf("Generic|Table/FrontendTable", module)
	.addDecorator(Story => (
		<TableProvider data={data} columns={columns}>
			<Story />
		</TableProvider>
	))
	.addDecorator(Story => (
		<CenteringContainer>
			<Story />
		</CenteringContainer>
	))
	.add("default", () => {
		// Hooks
		const {
			canPreviousPage,
			canNextPage,
			pageIndex,
			pageOptions,
			nextPage,
			previousPage,
			setGlobalFilter,
		} = useTableState()

		// Variables
		const displayedPageIndex = pageIndex + 1

		// Props
		const searchInputProps = {
			placeholderText: "search...",
			change: value => {
				setGlobalFilter(value)
				action("Searching for: ")(value)
			},
		}

		const paginationProps = {
			canPreviousPage,
			canNextPage,
			currentPage: pageIndex + 1,
			numberOfPages: pageOptions.length,
			onNextPageClick: () => {
				nextPage()
				action("Went to next page")(displayedPageIndex + 1)
			},
			onPreviousPageClick: () => {
				previousPage()
				action("Went to previous page")(displayedPageIndex - 1)
			},
		}

		return (
			<Container>
				<GlobalFilterContainer>
					<SearchInput {...searchInputProps} />
				</GlobalFilterContainer>
				<FrontendTable />
				<PaginationContainer>
					<Pagination {...paginationProps} />
				</PaginationContainer>
			</Container>
		)
	})
