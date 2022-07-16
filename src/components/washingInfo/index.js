import React from 'react'
import {  useSelector } from "react-redux"
import { DRYING_METHOD, TEMPERATURE, WASH_MODE } from "@/data/WASHINGDATA"
import {Info} from "./WashingInfo.styles"
function joinData(DATA,elem) {
	return DATA.filter(item => item.name === elem)
}

function WashingInfo() {
	const calc = useSelector(({ calculator }) => calculator)
	const monthly = calc.monthlyLaundryFrequency;
	const washSet = joinData(WASH_MODE, calc.washMachineSetting)
	const washTemp = joinData(TEMPERATURE, calc.washingTemperature)
	const dryingMet = joinData(DRYING_METHOD, calc.dryingMethod)
	const countryOfResidenceName = calc.countryOfResidenceName
  return (
		<>
			<Info>
				<span>{monthly}X</span>
				<img src={washSet[0].icon} alt={washSet[0].name} />
				<img src={washTemp[0].icon} alt={washSet[0].name} />
				<img src={dryingMet[0].icon} alt={washSet[0].name} />
			</Info>
			<div>
				<p>{countryOfResidenceName}</p>
			</div>
		</>
  )
}

export default WashingInfo