import Heading from "@/components/heading"
import React from "react"
import VideoBanner from "@/components/videoBanner"
import HeroBanner from "@/components/heroBanner"
import CardWardrobe from "@/components/cardWardrobe"
import Wrapper from "@/components/wrapper"
import { WARDROBEDATA,WARDROB_RESULT } from "@/data/WARDROBEDATA"
// Styles
import { WardrobeWrap, BtnOne, BtnItem, CardContent, CardWrap,CardInfo } from "@/styles/pageStyle/Wardrobe.styles"
import { useRouter } from 'next/router';
import CardItem from "../../components/cardItem"
function Wardrobe() {
	const router = useRouter()
	
	return (
		<Wrapper iconColor={`white`}>
			<WardrobeWrap>
				{/* <VideoBanner
					videoSrc={
						"https://footprint-b2c.s3.eu-central-1.amazonaws.com/Zimmer.mp4"
					}
				/> */}
				<HeroBanner image={"/static/images/brown.webp"} />
				<Heading text={"My Wardrobe"} />
				<CardWrap>
					<CardItem cards={WARDROBEDATA} handleRouter={()=> router.push("/time")}/>
					{WARDROB_RESULT && WARDROB_RESULT.map((item)=>{
						const { id,icon, name,...cardInfo } = item
						
						return (
							<CardContent key={id}>
								<CardItem cards={[{ icon, text: name }]} />
								<CardInfo>  
									<p>CO2 Footprint <b>{cardInfo.co2}</b></p>
									<p>Water Footprint <b>{cardInfo.water_footprint}</b></p>
									<p>Calculation date <b>{cardInfo.calc_data}</b></p>
								</CardInfo>
							</CardContent>
						)
					})}
				</CardWrap>
				
			</WardrobeWrap>
			<BtnItem>
					<BtnOne onClick={()=> router.push("/")}>visit shop</BtnOne>
				</BtnItem>
		</Wrapper>
	)
}
Wardrobe.requireAuth = true
export default Wardrobe

// Force
