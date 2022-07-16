import CardItem from "@/components/cardItem"
import Heading from "@/components/heading"
import InputCode from "@/components/inputCode"
import InputCodeWashing from "@/components/inputCodeWashing"
import NavBtn from "@/components/navButton"
import VideoBanner from "@/components/videoBanner"
import Wrapper from "@/components/wrapper"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import {
	Text,
	WashingItem,
	WashingItems,
	WashingWrap,
} from "@/styles/pageStyle/Washing.styles"
import { DRYING_METHOD, TEMPERATURE, WASH_MODE } from "@/data/WASHINGDATA"
import { useDispatch, useSelector } from "react-redux"
import { calculatorActions } from "@/redux/actions"
import ReadMore from "@/components/readMore"
import { flushSync } from "react-dom"

function Washing() {
	const dispatch = useDispatch()
	const calc = useSelector(({ calculator }) => calculator)
	const [code, setCode] = useState(calc.monthlyLaundryFrequency)
	// const [codeLength, setCodeLength] = useState([])
	const [stepWash, setStepWash] = useState(1)
	const [washMachineSetting, setWashMachineSetting] = useState(calc.washMachineSetting)
	const [washingTemperature, setWashingTemperature] = useState(calc.washingTemperature)
	const [dryingMethod, setDryingMethod] = useState(calc.dryingMethod)

	const [isWashing, setIsWashing] = useState(false)

	const handleMonthly = value => {
		setCode(value)
	}

	const handlerWashMode = text => {
		if (text === washMachineSetting) {
			setWashMachineSetting("")
			return
		}
		setWashMachineSetting(text)
	}

	const handlerTemperature = text => {
		if (text === washingTemperature) {
			setWashingTemperature("")
			return
		}
		setWashingTemperature(text)
	}

	const handlerDryingMode = text => {
		if (text === dryingMethod) {
			setDryingMethod("")
			return
		}
		setDryingMethod(text)
	}

	const navClick = info => {
		debugger
		if (washMachineSetting && code && stepWash !== 2) {
			flushSync(()=> {
				setStepWash(2)

			})
			return
		} else if (info === "next" && stepWash === 2 && isWashing) {
			addWashing()
		}
		// else if (info === "prev") {
		// 	setProductGender("")
		// }
	}

	// useEffect(() => {
	// 	if (!calc.monthlyLaundryFrequency) {
	// 		if (washMachineSetting && code) {
	// 			setTimeout(() => {
	// 				setStepWash(2)
	// 			}, 1000)
	// 		}
	// 	}
	// }, [washMachineSetting, code])

	const addWashing = async () => {
		const washing = {}
		
		washing.monthlyLaundryFrequency = parseInt(code)
		washing.washMachineSetting = washMachineSetting
		washing.dryingMethod = dryingMethod
		washing.washingTemperature = washingTemperature
		
		await dispatch(
			calculatorActions.setMotlyLaundry({
				monthlyLaundryFrequency: washing.monthlyLaundryFrequency,
			})
		)
		await dispatch(
			calculatorActions.setWashMachinee({
				washMachineSetting: washing.washMachineSetting,
			})
		)
		await dispatch(
			calculatorActions.setDryingMethod({
				dryingMethod: washing.dryingMethod,
			})
		)
		await dispatch(
			calculatorActions.setWashingTemperature({
				washingTemperature: washing.washingTemperature,
			})
		)
	}
useEffect(() => {
	
	setIsWashing(false)
}, [])
	useEffect(() => {
		if (
			washMachineSetting &&
			code &&
			washingTemperature &&
			dryingMethod &&
			stepWash === 2
		) {
			setIsWashing(true)
		}
	}, [washMachineSetting, code, washingTemperature, dryingMethod, stepWash])

	return (
		<Wrapper iconColor={`white`}>
			<WashingWrap>
				<VideoBanner
					videoSrc={
						"https://footprint-b2c.s3.eu-central-1.amazonaws.com/Wasser.mp4"
					}
				/>
				<Heading text={"How did you clean your item?"} />

				<WashingItems>
					{stepWash === 1 && (
						<>
							<WashingItem>
								<Text>
									Select the monthly laundry frequency of your item
								</Text>
								<div className="read-washing">
									<ReadMore
										className="read-washing"
										desc={`Here enter the number of times you wear and do the laundry for this item per month.`}
									/>
								</div>

								{/* input 1 sarqel */}
								<InputCodeWashing
									monthly={code}
									handleMonthly={handleMonthly}
								/>
							</WashingItem>
							<WashingItem>
								<Text>Select your laundry wash mode</Text>
								<div className="read-washing">
									<ReadMore
										className={"read-washing"}
										desc={`Based on the mode that you use to do laundry for this item, select the appropriate washing mode from the options below. If the washing machine mode that you use is not shown or you are unsure, then select 'Normal'. If you wash the item by hand, then select 'Handwash'.`}
									/>
								</div>

								<CardItem
									cards={WASH_MODE}
									handlerCard={handlerWashMode}
									cardSelect={washMachineSetting}
								/>
							</WashingItem>
						</>
					)}
					{stepWash === 2 && (
						<>
							<WashingItem>
								<Text>Select your temperature of wash</Text>
								<CardItem
									cards={TEMPERATURE}
									handlerCard={handlerTemperature}
									cardSelect={washingTemperature}
								/>
							</WashingItem>
							<WashingItem>
								<Text>Select your laundry drying method</Text>
								<CardItem
									cards={DRYING_METHOD}
									handlerCard={handlerDryingMode}
									cardSelect={dryingMethod}
								/>
							</WashingItem>
						</>
					)}
				</WashingItems>
			</WashingWrap>
			<NavBtn
				pathPrev="/checkresult"
				pathNext={isWashing ? "/homecountry" : ""}
				navClick={navClick}
			/>
		</Wrapper>
	)
}

Washing.requireAuth = false
export default Washing
