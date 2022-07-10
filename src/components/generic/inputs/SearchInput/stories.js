// Third-party imports
import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import centered from "@storybook/addon-centered/react"

// Global imports

// Local imports
import SearchInput from "./SearchInput"

////////////////////////////////////////////////////////////////////////////////

const searchInputProps = {
	placeholderText: "Search...",
	change: inputText => {
		action("onChange")(inputText)
	},
	search: inputText => {
		action("onSearch")(inputText)
	},
}

storiesOf("Generic|SearchInput", module)
	.addDecorator(centered)
	.add("default", () => <SearchInput {...searchInputProps} />)
