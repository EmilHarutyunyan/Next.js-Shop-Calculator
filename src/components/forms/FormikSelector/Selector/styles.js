// Third-party imports

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const placeholder = (theme, fontSize, isFieldInputValid) => styles => ({
	...styles,
	fontSize,
	fontFamily: theme.fonts.family.primary,
	// fontStyle: "italic",
	fontWeight: 400,
	color: isFieldInputValid ? theme.colors.grey2 : theme.colors.errorRed,
	lineHeight: "20px",
	padding: "0px",
	margin: "0px",
})

export const container = (theme, isFieldInputValid) => styles => ({
	...styles,
	width: "100%",
	maxWidth: "500px",
	border: `1px solid ${theme.colors.pureBlack}`,
	borderBottom: `1px solid ${
		isFieldInputValid ? theme.colors.pureBlack : theme.colors.errorRed
	}`,
})

export const input = styles => ({
	...styles,
	border: "none",
	":focus": {
		border: "none",
	},
})

export const control = (theme, fontSize, inputHeight) => styles => ({
	...styles,
	border: "none",
	fontSize,
	fontFamily: theme.fonts.family.primary,
	borderRadius: "0px",
	minHeight: 32,
	boxShadow: "none",
	height: inputHeight ? inputHeight : "31px",
})

export const dropdownIndicator = theme => (styles, state) => ({
	...styles,
	color: theme.colors.grey3,
	transition: "all .2s ease",
	transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
	width: "40px",
	padding: "0px 10px",
	height: "20px",
})

export const option = (theme, fontSize) => (styles, { isFocused, isSelected }) => ({
	...styles,
	fontFamily: "Graphik",
	fontWeight: 400,
	fontSize,
	// fontStyle: "italic",
	cursor: "pointer",
	color: theme.colors.black,
	":hover": {
		color: theme.colors.dark,
	},
	":focus": {
		color: theme.colors.dark,
	},
	backgroundColor: isFocused || isSelected ? theme.colors.grey0 : theme.colors.white,
})

export const menu = theme => styles => ({
	...styles,
	border: `1px solid ${theme.colors.grey1}`,
	boxShadow: "none",
	borderRadius: "0px",
	marginTop: "0px",
})

export const menuList = styles => ({
	...styles,
	paddingTop: 0,
	paddingBottom: 0,
})

export const singleValue = (theme, fontSize) => styles => ({
	...styles,
	fontFamily: "Graphik",
	fontWeight: 400,
	color: theme.colors.grey3,
	// fontStyle: "italic",
	fontSize,
	lineHeight: "20px",
	margin: "0px",
})

export const valueContainer = (theme, fontSize, backgroundColor) => styles => ({
	backgroundColor,
	...styles,
	fontFamily: "Graphik",
	fontWeight: 400,
	color: theme.colors.black,
	fontSize,
	lineHeight: "10px",
	padding: "5px",
})

export const customTheme = theme => selectTheme => ({
	...selectTheme,
	borderRadius: "0px",
	colors: {
		...selectTheme.colors,
		neutral20: theme.colors.grey1,
		primary25: theme.colors.black20,
		primary50: theme.colors.black,
		primary75: theme.colors.grey0,
		primary: theme.colors.black,
	},
})
