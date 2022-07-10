export const uniqId = () => {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0,
			v = c === "x" ? r : (r & 0x3) | 0x8
		return v.toString(16)
	})
}

const defaultColor = "rgba(158,158,158,0.63)"

export const addColorProperties = (arr, codeToCheck, color) => {
	const index = arr.findIndex(el => el.code === codeToCheck)
	arr[index].color = color
}

export const fillWithColor = (countryCode, color = defaultColor, prevCount=null) => {
	const pathCountrySVG = document.querySelectorAll("path.cls-1")

		if (countryCode)
			countryCode &&
				[...pathCountrySVG].some(
					el => el.dataset.id === countryCode && (el.style.fill = color)
				)
}

export const removeColor = (prevCount = null) => {
	const pathCountrySVG = document.querySelectorAll("path.cls-1")

	if (prevCount)
		prevCount &&
			[...pathCountrySVG].some(
				el => el.dataset.id === prevCount && (el.style.fill = "")
			)
}

