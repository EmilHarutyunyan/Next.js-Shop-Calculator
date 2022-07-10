import React from 'react'
import {  useSelector } from "react-redux"
import { DRYING_METHOD, TEMPERATURE, WASH_MODE } from "@/data/WASHINGDATA"
import {Info} from "./WashingInfo.styles"
function joinData(DATA,elem) {
	return DATA.filter(item => item.text === elem)
}

function WashingInfo() {
	const calc = useSelector(({ calculator }) => calculator)
	const monthly = calc.monthlyLaundryFrequency;
	const washSet = joinData(WASH_MODE, calc.washMachineSetting)
	const washTemp = joinData(TEMPERATURE, calc.washingTemperature)
	const dryingMet = joinData(DRYING_METHOD, calc.dryingMethod)
	
  return (
		<Info>
			<span>{monthly}X</span>
			<img src={washSet[0].icon} alt={washSet[0].text} />
			<img src={washTemp[0].icon} alt={washSet[0].text} />
			<img src={dryingMet[0].icon} alt={washSet[0].text} />
		</Info>
  )
}

export default WashingInfo