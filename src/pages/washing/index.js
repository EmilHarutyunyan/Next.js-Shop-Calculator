import CardItem from "@/components/cardItem"
import Heading from "@/components/heading"
import InputCode from "@/components/inputCode"
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
function Washing() {
	const dispatch = useDispatch()
	const calc = useSelector(({ calculator }) => calculator)
	const [code, setCode] = useState(calc.monthlyLaundryFrequency)
	const [codeLength, setCodeLength] = useState([])
	const [stepWash, setStepWash] = useState(1)
	const [washMachineSetting, setWashMachineSetting] = useState(calc.washMachineSetting)
	const [washingTemperature, setWashingTemperature] = useState(calc.washingTemperature)
	const [dryingMethod, setDryingMethod] = useState(calc.dryingMethod)

	const [isWashing,setIsWashing] = useState(false);

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
		if (info === "next") {
			addWashing()
		} 
		// else if (info === "prev") {
		// 	setProductGender("")
		// }
	}
	const addWashing = async () => {
		const washing = {}
		washing.monthlyLaundryFrequency = code
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
	
		console.log(calc,"calc-washing")
	}

	useEffect(() => {
		if (washMachineSetting) {
			if (codeLength.length === 3) {
				setTimeout(()=>{
					setStepWash(2)
				},1000)
			}
		}
	}, [washMachineSetting, code])

	useEffect(() => {
		if ((washMachineSetting && code && washingTemperature && dryingMethod)) {
			setIsWashing(true)
		}
	}, [washMachineSetting, code, washingTemperature, dryingMethod])


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
									Select the mount laundry frequency of your item
								</Text>
								<InputCode
									nameClass="input-code-washing"
									length={3}
									collectCode={inputCode => {
										const num = inputCode.reduce(function (acc, val) {
											return acc + val
										}, "")
										setCode(+num)
										setCodeLength(num.split(""))
									}}
								/>
							</WashingItem>
							<WashingItem>
								<Text>Select your laundry wash mode</Text>
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
				pathNext={isWashing ? "/checkresult" : ""}
				navClick={navClick}
			/>
		</Wrapper>
	)
}

Washing.requireAuth = false
export default Washing
