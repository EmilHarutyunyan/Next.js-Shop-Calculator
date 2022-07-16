import React, { useState, useRef } from "react"

import {CodeInput,CodeLabel,CodeInputs} from "./InputCode.styles"


const InputCode = ({
	length,
	collectCode,
	nameClass,
	numberCode = "",
	minVal = "0",
	maxVal = "100",
	defaultValue,
}) => {
	const numberArray = numberCode ? String(numberCode).split("") : ""
	let codeArray = numberArray ? numberArray : defaultValue
	// codeArray = codeArraydefaultValue &&  ? defaultValue : codeArray
	const [code, setCode] = useState(codeArray)

	const inputs = useRef([])

	const processInput = (e, slot) => {
		const num = e.target.value

		console.log(minVal[slot])

		if (
			!(parseInt(minVal[slot]) <= num && parseInt(maxVal[slot]) >= num) &&
			slot !== maxVal.length - 1
		) {
			return
		}

		if (/[^0-9]/.test(num)) return
		const newCode = [...code]
		newCode[slot] = num
		setCode(newCode)
		collectCode(newCode)
		if (slot !== length - 1) {
			inputs.current[slot + 1].focus()
		}
	}

	const onKeyUp = (e, slot) => {
		console.log(e.target.value)
		if (e.keyCode === 8 && !code[slot] && slot !== 0) {
			const newCode = [...code]
			newCode[slot - 1] = ""
			setCode(newCode)
			inputs.current[slot - 1].focus()
		}
	}

	return (
		<CodeInput className={nameClass}>
			<CodeInputs>
				{code.map((num, idx) => {
					return (
						<input
							key={idx}
							type="text"
							inputMode="numeric"
							maxLength={1}
							value={num}
							autoFocus={!code[0].length && idx === 0}
							onChange={e => processInput(e, idx)}
							onKeyUp={e => onKeyUp(e, idx)}
							ref={ref => inputs.current.push(ref)}
						/>
					)
				})}
			</CodeInputs>
		</CodeInput>
	)
}

export default InputCode
