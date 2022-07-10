// Third-party imports
import React from "react"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const Cross = ({ iconColor = "inherit" }) => (
	<svg
		width="20%"
		height="20%"
		viewBox="0 0 10 10"
		fill={iconColor}
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fill={iconColor}
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M0.523667 0.523667C0.914191 0.133143 1.54736 0.133143 1.93788 0.523667L9.47634 8.06213C9.86687 8.45265 9.86687 9.08582 9.47634 9.47634C9.08582 9.86687 8.45265 9.86687 8.06213 9.47634L0.523667 1.93788C0.133143 1.54736 0.133143 0.914191 0.523667 0.523667Z"
		/>
		<path
			fill={iconColor}
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M9.47634 0.523667C9.86687 0.914191 9.86687 1.54736 9.47634 1.93788L1.93788 9.47634C1.54736 9.86687 0.914191 9.86687 0.523667 9.47634C0.133143 9.08582 0.133143 8.45265 0.523667 8.06213L8.06213 0.523667C8.45265 0.133143 9.08582 0.133143 9.47634 0.523667Z"
		/>
	</svg>
)

export default Cross
