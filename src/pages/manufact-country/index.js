import React, { useState } from "react"
import HeroBanner from "@/components/heroBanner"
import Heading from "@/components/heading"
import ReadMore from "@/components/readMore"
import Wrapper from "@/components/wrapper"
import { CountryWrap } from "@/styles/pageStyle/Homecountry.styles"
import MapContainer from "../../components/MapContainer"
import NavBtn from "@/components/navButton"
import { useDispatch, useSelector } from "react-redux"
import { calculatorActions } from "@/redux/actions"
function ManufactCountry() {

	const dispatch = useDispatch()
	const calc = useSelector(({ calculator }) => calculator)
	
	
	const manufacturingCountryName = calc.manufacturingCountryName
	const [countryName, setCountryName] = useState(manufacturingCountryName)

	const handleCountry = country => {
		setCountryName(country)
	}

	const navClick = info => {
		if (info === "next") {
			addManufactCountry()
		} else if (info === "prev") {
			setCountryName("")
		}
	}


	const addManufactCountry = async () => {
		const manufacturingCountryName = countryName
		await dispatch(calculatorActions.setManufactCountry({ manufacturingCountryName }))
	}
	return (
		<>
			<Wrapper iconColor={`white`}>
				<CountryWrap>
					<HeroBanner image={"/static/images/brown.webp"} />
					<Heading text={"Where was the item made?"} />
					<ReadMore
						desc={`Select the country that is shown on the item label. This is the location where your item was manufactured. If the location you are looking for is not available, leave us feedback.`}
					/>

					<MapContainer
						handleCountry={handleCountry}
						countryName={countryName}
					/>
				</CountryWrap>
				<NavBtn
					pathPrev="/checkresult"
					pathNext={countryName ? "/checkresult" : ""}
					navClick={navClick}
				/>
			</Wrapper>
		</>
	)
}

export default ManufactCountry
