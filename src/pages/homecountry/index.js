import CardItem from "@/components/cardItem"
import Heading from "@/components/heading"
import HeroBanner from "@/components/heroBanner"
import ReadMore from "@/components/readMore"
import Wrapper from "@/components/wrapper"
import React, { useState } from "react"
import { CountryWrap } from "@/styles/pageStyle/Homecountry.styles"
import MapContainer from "../../components/MapContainer"
import NavBtn from "@/components/navButton"
import { useDispatch, useSelector } from "react-redux"
import { calculatorActions } from "@/redux/actions"

function Homecountry() {
	const dispatch = useDispatch()
	const calc = useSelector(({ calculator }) => calculator)
	
	const countryOfResidenceId = calc.countryOfResidenceId
	const [countryName, setCountryName] = useState(countryOfResidenceId)

	

	const handleCountry = country => {
		setCountryName(country)
	}

	const navClick = info => {
		if (info === "next") {
			addCountryHome()
		} else if (info === "prev") {
			setCountryName("")
		}
	}
	const addCountryHome = async () => {
		const countryOfResidenceId = countryName
		await dispatch(calculatorActions.setCountryOfRes({countryOfResidenceId}))
		

		
		
	}
	
	return (
		<>
			<Wrapper iconColor={`white`}>
				<CountryWrap>
					<HeroBanner image={"/static/images/homecountry.webp"} />
					<Heading text={"Where did you wear your item the most?"} />
					<ReadMore
						desc={`If you have moved between countries since you acquired the item, then select the country where you used the item for majority of the time period. This information helps us in taking into consideration the geographical reference while calculating the footprint of your item’s laundry.`}
					/>

					<MapContainer
						handleCountry={handleCountry}
						countryName={countryName}
					/>
				</CountryWrap>
				<NavBtn
					pathPrev="/time"
					pathNext={countryName ? "/choose-gender" : ""}
					navClick={navClick}
				/>
			</Wrapper>
		</>
	)
}

export default Homecountry
