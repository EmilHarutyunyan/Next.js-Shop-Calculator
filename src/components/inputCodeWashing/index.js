import React, { useState, useRef, useEffect } from "react"

import {CodeInputs } from "./InputCodeWashing.styles"


const InputCodeWashing = ({ monthly='1', handleMonthly = f => f }) => {
	const [value, setValue] = useState(monthly)
	const inputElement = useRef(null)
	useEffect(() => {
		if (inputElement.current) {
			inputElement.current.focus()
		}
	}, [])
	return (
		// <CodeInput>
		<CodeInputs>
			<input
				type="number"
				value={value}
				onFocus={e => {
					e.target.value === "0" ? setValue("") : null
				}}
				ref={inputElement}
				onChange={e => {
					let { value } = e.target
					// value = Math.max(Number(min), Math.min(Number(max), Number(value)))
					setValue(value)
					handleMonthly(value)
				}}
			/>
		</CodeInputs>
		// </CodeInput>
	)
}

export default InputCodeWashing
