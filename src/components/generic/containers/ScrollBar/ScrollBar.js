// Third-party imports
import React, { forwardRef } from "react"

// Global imports
import SimpleBar from "simplebar-react"
import "simplebar/dist/simplebar.min.css"

// Local imports

////////////////////////////////////////////////////////////////////////////////

// custom styles are in global styles

const Scrollbar = ({ children, height, width, style, ...props }, ref) => {
	const simpleBarProps = {
		scrollableNodeProps: { ref },
		autoHide: false,
		style: {
			height,
			width,
			...style,
		},
		...props,
	}
	return <SimpleBar {...simpleBarProps}>{children}</SimpleBar>
}

export default forwardRef(Scrollbar)
