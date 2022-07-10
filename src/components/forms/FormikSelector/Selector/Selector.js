// Third-party imports
import React from "react"
import { useTheme } from "styled-components"
import Select from "react-select"

// Global imports

// Local imports
import {
	placeholder,
	container,
	input,
	control,
	dropdownIndicator,
	option,
	menu,
	menuList,
	singleValue,
	customTheme,
	valueContainer,
} from "./styles"

////////////////////////////////////////////////////////////////////////////////

const navigationProps = {
	isClearable: false,
	isDisabled: false,
	isRtl: false,
	isSearchable: true,
}

/**
 * @function Selector
 * @category Components
 * @subcategory Checkout
 * @description Renders a mocked select tag with the appropriate styling.
 */
const Selector = ({
	fontSize,
	isFieldInputValid,
	name,
	isMulti,
	inputHeight,
	disabled,
	...props
}) => {
	// Hooks
	const theme = useTheme()

	// Props
	const backgroundColor = disabled ? "#F3F0EF" : "white"
	const selectProps = {
		...props,
		...navigationProps,
		id: name,
		instanceId: name,
		isDisabled: disabled,
		styles: {
			placeholder: placeholder(theme, fontSize, isFieldInputValid),
			container: container(theme, isFieldInputValid),
			input,
			control: control(theme, fontSize, inputHeight),
			dropdownIndicator: dropdownIndicator(theme, backgroundColor),
			option: option(theme, fontSize),
			menu: menu(theme),
			menuList,
			singleValue: singleValue(theme, fontSize),
			valueContainer: valueContainer(theme, fontSize, backgroundColor),
		},
		theme: customTheme(theme),
		components: {
			IndicatorSeparator: () => null,
		},
		isMulti: isMulti ? true : false,
	}

	return <Select {...selectProps} />
}

export default Selector
