// Third-party imports
import React from "react"
import {
	useTable,
	usePagination,
	useGlobalFilter,
	useFilters,
	useSortBy,
} from "react-table"

// Global imports

// Local imports
import TableContext from "./context"

////////////////////////////////////////////////////////////////////////////////

const TableProvider = ({ children, data, columns, pageSize }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		//
		page,
		canPreviousPage,
		canNextPage,
		pageOptions,
		nextPage,
		previousPage,
		state: { pageIndex },
		//
		setGlobalFilter,
	} = useTable(
		{
			data,
			columns,
			initialState: {
				pageIndex: 0,
				pageSize,
				sortBy: [
					{
						id: "name",
						desc: false,
					},
					{
						id: "title",
						desc: false,
					},
				],
			},
			disableSortRemove: true,
			sortTypes: {
				caseInsensitive: (a, b, id) => {
					const valueA = a.values[id].toLowerCase()
					const valueB = b.values[id].toLowerCase()
					return valueB < valueA ? 1 : -1
				},
				sortDate: (a, b, id) => {
					const valueA = a.values[id].split("/").reverse().join()
					const valueB = b.values[id].split("/").reverse().join()
					return valueA < valueB ? -1 : valueA > valueB ? 1 : 0
				},
			},
		},
		useGlobalFilter,
		useFilters,
		useSortBy,
		usePagination
	)

	return (
		<TableContext.Provider
			value={{
				getTableProps,
				headerGroups,
				page,
				prepareRow,
				getTableBodyProps,
				canPreviousPage,
				canNextPage,
				pageOptions,
				nextPage,
				previousPage,
				pageIndex,
				setGlobalFilter,
			}}
		>
			{children}
		</TableContext.Provider>
	)
}

export default TableProvider
