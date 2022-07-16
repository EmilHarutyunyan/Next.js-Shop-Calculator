import Heading from "@/components/heading"
import HeroBanner from "@/components/heroBanner"
import NavBtn from "@/components/navButton"
import Wrapper from "@/components/wrapper"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import {
	CountryWrap,
	Content,
	Item,
	Items,
	BtnWrap,
	BtnItem,
	ImgWrap,
} from "@/styles/pageStyle/CheckResult.styles"
import { useSelector } from "react-redux"
import MaterialInfo from "../../components/materialInfo"
import WashingInfo from "../../components/washingInfo"
// import { calculatorActions } from "@/redux/actions"
import axios from "axios"
import { API_URL } from '@/config';
function CheckResult() {
	
	const router = useRouter()
	// const dispatch = useDispatch()
	const calc = useSelector(({ calculator }) => calculator)
	const checkResult = [
		{
			manufacturingCountryName: calc.manufacturingCountryName,
			materialDistribution: calc.materialDistribution,
			washMachineSetting: calc.washMachineSetting,
			dryingMethod: calc.dryingMethod,
			washingTemperature: calc.washingTemperature,
			monthlyLaundryFrequency: calc.monthlyLaundryFrequency,
		},
	]
	const handleClick = () => {
		async function fetchData() {
			try {
				const data = await axios.post(`${API_URL}b2c/footprint/`, calc)
			} catch (error) {
				router.push('/results')
			}
			
		}
		fetchData()

	}

	return (
		<Wrapper iconColor={"white"}>
			<CountryWrap>
				<HeroBanner image={"/static/images/selectcountry.webp"} />

				{checkResult[0]?.materialDistribution?.length &&
				checkResult[0].monthlyLaundryFrequency &&
				checkResult[0].washingTemperature &&
				checkResult[0].washMachineSetting ? (
					<Heading text={"Bravo! You completed the washing Label."} />
				) : (
					<Heading text={"Specify your item."} />
				)}
				<Content image={"/static/images/label.png"}>
					<Item>
						<Items>
							<span>Made in</span>
							{checkResult[0].manufacturingCountryName ? (
								<p
									style={{ cursor: "pointer" }}
									onClick={() => router.push("/manufact-country")}
								>
									{checkResult[0].manufacturingCountryName}
								</p>
							) : (
								<BtnWrap>
									<BtnItem
										onClick={() => router.push("/manufact-country")}
									>
										Select the country
									</BtnItem>
								</BtnWrap>
							)}
						</Items>
						<Items>
							<span>Made out of</span>
							{!checkResult[0].manufacturingCountryName ? (
								<BtnWrap>
									<BtnItem disable>Choose the materials</BtnItem>
								</BtnWrap>
							) : !checkResult[0]?.materialDistribution?.length > 0 ? (
								<BtnWrap>
									<BtnItem onClick={() => router.push("/material")}>
										Choose the materials
									</BtnItem>
								</BtnWrap>
							) : (
								<div
									style={{ cursor: "pointer" }}
									onClick={() => router.push("/material")}
								>
									<MaterialInfo />
								</div>
							)}
						</Items>

						<Items>
							<span>Care instructions</span>

							{!checkResult[0]?.materialDistribution?.length > 0 ? (
								<BtnWrap>
									<BtnItem disable>Choose washing habits</BtnItem>
								</BtnWrap>
							) : !checkResult[0].monthlyLaundryFrequency &&
							  !checkResult[0].washingTemperature &&
							  !checkResult[0].dryingMethod &&
							  !checkResult[0].washMachineSetting ? (
								<BtnWrap>
									<BtnItem onClick={() => router.push("/washing")}>
										Choose washing habits
									</BtnItem>
								</BtnWrap>
							) : (
								<div
									style={{ cursor: "pointer" }}
									onClick={() => router.push("/washing")}
								>
									<WashingInfo />
								</div>
							)}
						</Items>
						<Items>
							{checkResult[0]?.materialDistribution?.length &&
							checkResult[0].monthlyLaundryFrequency &&
							checkResult[0].washingTemperature &&
							checkResult[0].washMachineSetting ? (
								<p>See your </p>
							) : (
								<p>Or go straight to your </p>
							)}
							<div className="result-btn" onClick={() => handleClick()}>
								RESULT
							</div>
							<ImgWrap>
								<img src="/static/images/barcode.png" alt="barcode" />
							</ImgWrap>
						</Items>
					</Item>
				</Content>
			</CountryWrap>

			<NavBtn />
		</Wrapper>
	)
}
export default CheckResult
