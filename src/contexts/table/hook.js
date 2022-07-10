// Third-party imports
import { useContext } from "react"

// Global imports
import TableContext from "./context"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const useTableState = () => {
	const context = useContext(TableContext)

	if (context === undefined) {
		throw new Error(
			"The useTableState React hook must be used within the TableProvider."
		)
	}

	return context
}

export default useTableState
