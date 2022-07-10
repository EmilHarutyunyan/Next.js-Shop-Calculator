// Third-party imports
import React from "react"
// import { useTable, usePagination } from "react-table"

// Global imports
import { Icon, If } from "@/components/generic"

// Local imports
import { StyledPagination } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const ArrowButton = ({ onClick, direction, enabled }) => {
	const iconProps = {
		enabled: {
			style: {
				width: "10px",
				height: "10px",
			},
			iconFilename: `angle-${direction}`,
		},
		disabled: {
			style: {
				visibility: "hidden",
				width: "27px",
			},
			iconFilename: `angle-${direction}`,
		},
	}

	return enabled ? (
		<button onClick={onClick}>
			<Icon {...iconProps["enabled"]} />
		</button>
	) : (
		<Icon {...iconProps["disabled"]} />
	)
}

/**
 * @function Pagination
 * @category Generic
 * @description Component to render pagination of a table
 * @param {function} onPreviousPageClick - Verify if the left arrow was clicked
 * @param {function} onNextPageClick - Verify if the right arrow was clicked
 * @param {boolean} canNextPage - Determines if a next page is available.
 * @param {boolean} canPreviousPage - Determines if a previous page is available.
 * @param {number} currentPage - The page the user is currently viewing.
 * @param {number} numberOfPages - The number of pages available.
 */
const Pagination = ({
	onPreviousPageClick = () => {},
	onNextPageClick = () => {},
	canNextPage,
	canPreviousPage,
	currentPage,
	numberOfPages,
}) => {
	// Props
	const prePageButtonProps = {
		onClick: () => {
			onPreviousPageClick()
		},
		direction: "left",
		enabled: canPreviousPage,
	}

	const nextPageButtonProps = {
		onClick: () => {
			onNextPageClick()
		},
		direction: "right",
		enabled: canNextPage,
	}

	return (
		<If condition={numberOfPages > 1}>
			<StyledPagination>
				<ArrowButton {...prePageButtonProps} />
				<div>Page</div>
				<div>{currentPage} </div>
				<div>of</div>
				<div>{numberOfPages}</div>
				<ArrowButton {...nextPageButtonProps} />
			</StyledPagination>
		</If>
	)
}

export default Pagination
