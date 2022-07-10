// Third-party imports
import React from "react"

// Global imports
import { useTableState } from "@/contexts"

// Local imports
import UITable from "../UITable"
import { Container } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function FrontendTable
 * @category Generic
 * @description Component to render a table.
 *
 */
const FrontendTable = () => {
	// Hooks
	const {
		page,
		getTableProps,
		headerGroups,
		getTableBodyProps,
		prepareRow,
	} = useTableState()

	// Props
	const UITableProps = {
		rows: page,
		getTableProps,
		headerGroups,
		getTableBodyProps,
		prepareRow,
	}

	return (
		<>
			<Container>
				<UITable {...UITableProps} />
			</Container>
		</>
	)
}
export default FrontendTable
