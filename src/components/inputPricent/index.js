import React,{useState} from 'react'

function InputPricent({ pricent, handlePricent = f => f, id }) {
	const [value, setValue] = useState(pricent)
	return (
		<input
			type="number"
			value={value}
			onFocus={e => {
				e.target.value === "0" ? setValue(""): null
			}}
			onChange={e => {
				let { value, min, max } = e.target
				value = Math.max(Number(min), Math.min(Number(max), Number(value)))
				debugger
				setValue(value)
				handlePricent(id, value)
			}}
			min="0"
			max="100"
		/>
	)
}

export default InputPricent