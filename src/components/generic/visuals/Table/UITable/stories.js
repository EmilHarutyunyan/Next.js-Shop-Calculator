// Third-party imports
import React from "react"
import { storiesOf } from "@storybook/react"
import styled from "styled-components"

// Global imports
import { TableProvider } from "@/contexts"
import { useTableState } from "@/contexts"

// Local imports
import UITable from "./UITable"
import data from "../data.json"
import columns from "../columns.json"

////////////////////////////////////////////////////////////////////////////////

const CenteringContainer = styled.div`
	width: 100%;
	height: 100vh;
	padding: 0px 50px;
	display: flex;
	justify-content: center;
	align-items: center;
`

storiesOf("Generic|Table/UITable", module)
	.addDecorator(Story => (
		<CenteringContainer>
			<Story />
		</CenteringContainer>
	))
	.addDecorator(Story => (
		<TableProvider data={data} columns={columns}>
			<Story />
		</TableProvider>
	))
	.add("default", () => {
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
			getTableBodyProps,
			headerGroups,
			prepareRow,
		}
		return <UITable {...UITableProps} />
	})
