// Third-party imports
import React from "react"

// Global imports
import { useTheme } from "@/hooks"
import { Icon } from "@/components/generic"

// Local imports
import { StyledTable } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const TableHead = ({ headerGroups }) => {
	// Hooks
	const theme = useTheme()

	// Props
	const iconsStyleProps = column => ({
		style: {
			color:
				column.isSortedDesc === undefined
					? theme.colors.gray
					: column.isSortedDesc
					? theme.colors.tomato
					: theme.colors.arrowGreen,
			marginLeft: "20px",
			fontSize: "10px",
		},
		iconFilename: !column.isSortedDesc ? "angle-down" : "angle-up",
	})

	return (
		<thead>
			{headerGroups.map(headerGroup => (
				<tr {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map(column => {
						return (
							<th {...column.getHeaderProps(column.getSortByToggleProps())}>
								{column.render("Header")}
								{!column.disableSortBy &&
								column.filteredRows.length > 0 ? (
									<span>
										<Icon {...iconsStyleProps(column)} />
									</span>
								) : (
									<div style={{ width: "145px" }}></div>
								)}
							</th>
						)
					})}
				</tr>
			))}
		</thead>
	)
}

const TableBody = ({ rows, prepareRow, tableBodyProps }) => (
	<tbody {...tableBodyProps}>
		{rows.map(row => {
			prepareRow(row)
			return (
				<tr {...row.getRowProps()}>
					{row.cells.map(cell => {
						return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
					})}
				</tr>
			)
		})}
	</tbody>
)

/**
 * @function UITable
 * @category Generic
 * @description Component to render the UI of a table
 * @param {function} getTableProps - React Table function used to retrieve props for the <table> component.
 * @param {function} getTableBodyProps - React Table function used to retrieve props for the <tbody> component.
 * @param {Array} headerGroups - Data generated by the React Table useTable hook concerning the header row of the table.
 * @param {function} prepareRow - Function that needs to be colled on each individual row before rendering.
 * @param {Array} rows - Data generated by the React Table useTable hook for the rows of the table.
 */
const UITable = ({
	rows,
	getTableProps,
	headerGroups,
	getTableBodyProps,
	prepareRow,
}) => {
	// Props
	const tableHeadProps = {
		headerGroups,
	}

	const tableBodyProps = {
		rows,
		prepareRow,
		tableBodyProps: getTableBodyProps(),
	}

	return (
		<StyledTable {...getTableProps()}>
			<TableHead {...tableHeadProps} />
			<TableBody {...tableBodyProps} />
		</StyledTable>
	)
}

export default UITable
