import CardItem from "@/components/cardItem"
import Heading from "@/components/heading"
import NavBtn from "@/components/navButton"
import ReadMore from "@/components/readMore"
import VideoBanner from "@/components/videoBanner"
import Wrapper from "@/components/wrapper"
import React from "react"
import { useState } from "react"
import ChooseGenWrap from "@/styles/pageStyle/ChooseGender.styles"
import GENDER from "@/data/GENDER"
import { useDispatch, useSelector } from "react-redux"
import { calculatorActions } from "@/redux/actions"

function ChooseGender() {
	const dispatch = useDispatch()
	const calc = useSelector(({ calculator }) => calculator)
	const productGender = calc.productGender
	
	const [gender, setGender] = useState(productGender)
	const handlerGender = text => {
		if (text === gender) {
			setGender("")
		}
		setGender(text)
	
	}


	const navClick = info => {
		if (info === "next" && gender) {
			addGender()
		} else if (info === "prev") {
			setGender("")
		}
	}
	const addGender = async () => {
			const productGender = gender
			await dispatch(calculatorActions.setProductGender({ productGender }))

	}


	return (
		<Wrapper iconColor={"white"}>
			<ChooseGenWrap>
				<VideoBanner
					videoSrc={
						"https://footprint-b2c.s3.eu-central-1.amazonaws.com/Textil2.mp4"
					}
				/>
				<Heading text={"Choose the items gender."} />
				<ReadMore
					desc={
						"The item’s weight varies depending on the gender it belongs to. Hence, specifying the gender helps us to show you more accurate results specific to your item. Select the gender of the person who uses this item. If you cannot identify, or if it is an unisex item then select Unisex"
					}
				/>
				<CardItem
					cards={GENDER}
					width={"187px"}
					height={"181px"}
					handlerCard={handlerGender}
					cardSelect={gender}
				/>
			</ChooseGenWrap>
			<NavBtn
				pathPrev="/homecountry"
				pathNext={gender ? "/product" : ""}
				navClick={navClick}
			/>
		</Wrapper>
	)
}

export default ChooseGender
