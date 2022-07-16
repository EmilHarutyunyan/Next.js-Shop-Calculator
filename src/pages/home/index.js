import CardHome from "@/components/cardHome"
import VideoBanner from "@/components/videoBanner"
import Wrapper from "@/components/wrapper"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"
import { CARDHOMEDATA } from "@/data/CARDHOMEDATA"
import {
	HomeLayout,
	Desc,
	Title,
	Text,
	HomeWrap,
	HomeInfo,
	BtnOne,
	BtnTwo,
	BtnWrap,
	BtnItem,
	Span,
	Footer,
} from "@/styles/pageStyle/Home.styles"
function Home() {
	const router = useRouter()
	return (
		<Wrapper>
			<HomeLayout>
				<HomeWrap>
					<VideoBanner
						videoSrc={
							"https://footprint-b2c.s3.eu-central-1.amazonaws.com/Textil.mp4"
						}
					/>
					<HomeInfo>
						<Title>Welcome to your Wardrobe!</Title>
						<Desc>
							Calculate your fashion items' footprint in terms of liters of
							water consumed and CO₂ emissions with our footprint
							calculator!
						</Desc>
						<Text>
							Fashion is the Second most polluting industry in the world.
						</Text>
						<Span>Each year:</Span>
					</HomeInfo>

					<CardHome cards={CARDHOMEDATA} />
					<Span>
						It’s difficult as consumers to realize the impact of our clothes
						due to little transparency.
					</Span>
				</HomeWrap>
				<BtnWrap>
					<BtnItem>
						<BtnOne onClick={() => router.push("https://staiy.com/")}>
							visit shop
						</BtnOne>
					</BtnItem>
					<BtnItem>
						<BtnTwo onClick={() => router.push("/wardrobe")}>
							start calculating
						</BtnTwo>
					</BtnItem>
				</BtnWrap>
			</HomeLayout>
			<Footer>
				* These values are close estimates calculated through different reports
				and calculators.
			</Footer>
		</Wrapper>
	)
}
Home.requireAuth = false
export default Home
