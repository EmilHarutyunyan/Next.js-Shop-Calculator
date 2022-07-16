import React from "react"
import Wrapper from "@/components/wrapper"
import VideoBanner from "@/components/videoBanner"
import HeroBanner from "@/components/heroBanner"
import {
	InfTex,
	ResultsWrap,
	Title,
	InfItem,
	InfItems,
	Equa,
	RegBlock,
	BtnItem
} from "../../styles/pageStyle/Results.styles"
import InfoCalc from "../../components/infoCalc"
import Socials from "@/components/socials"

import router from "next/router"

import { useState } from "react"
import CardResult from "../../components/cardResult"
import { getJwtToken } from "../../lib/jsUtils"
import FashionBenchmark from "../../components/fashionBencmark"
import { useDispatch } from "react-redux"
import { calculatorActions } from "@/redux/actions"
function Results() {
	const [user, setUSer] = useState(getJwtToken())
	const dispatch = useDispatch()
	const handleHref = (href)  => {
		// e.preventDefault()
		router.push(href)
	}

	return (
		<Wrapper>
			<ResultsWrap>
				<VideoBanner
					videoSrc={
						"https://footprint-b2c.s3.eu-central-1.amazonaws.com/Textil.mp4"
					}
				/>

				<Title>You could do better.</Title>
				<InfItem>
					<InfItems>
						<div>
							<InfTex>This much water was used for your item</InfTex>

							<InfoCalc
								title={"Manufacturing Phase"}
								count={11.721}
								icon={"/static/svg/results/drop.svg"}
								weight={"l"}
							/>
							<InfoCalc
								title={"Usage Phase"}
								count={1.841}
								icon={"/static/svg/results/drop.svg"}
								weight={"l"}
							/>
							<InfoCalc
								title={"Total"}
								count={13.562}
								color={`#EB5846`}
								icon={"/static/svg/results/drop-orange.svg"}
								weight={"l"}
							/>
						</div>

						<Equa>
							<div className="equa-text">
								<p>
									Equivalent days of drinking water/person: 5974.7 days
								</p>
							</div>
							<div className="equa-img">
								<img
									src={"/static/svg/results/markers.svg"}
									alt="marker"
								/>
							</div>
						</Equa>
					</InfItems>
					{user && (
						<InfItems>
							<div>
								<InfTex>
									This much CO<sub>2</sub> was produced for your item
								</InfTex>

								<InfoCalc
									title={"Manufacturing Phase"}
									count={13}
									icon={"/static/svg/results/cloud.svg"}
									weight={"kg"}
								/>
								<InfoCalc
									title={"Usage Phase"}
									count={0.07}
									icon={"/static/svg/results/cloud.svg"}
									weight={"kg"}
								/>
								<InfoCalc
									title={"Total"}
									count={13.8}
									color={`#EB5846`}
									icon={"/static/svg/results/cloud-orange.svg"}
									weight={"kg"}
								/>
							</div>

							<Equa>
								<div className="equa-text">
									<p>Equivalent kilometers driven by a car: 68.7 km</p>
								</div>
								<div className="equa-img">
									<img
										src={"/static/svg/results/markers.svg"}
										alt="marker"
									/>
								</div>
							</Equa>
						</InfItems>
					)}
				</InfItem>
				{
					<div>
						{user && (
							<div className="user-info">
								<InfTex>This is your items Ranking</InfTex>

								<FashionBenchmark />
								<p>
									Your Shirt ranks on position <b>28</b> among{" "}
									<b>500</b> other unique combinations of inputs entered
									for Shirts. It is better than <b>1.15%</b> of total{" "}
									<b>87</b> Shirts evaluate with the Staiy Product
									Environmental Footprint Calculator.
								</p>
								<Socials title={"Tell your friends"} />
								<CardResult />
								<BtnItem>
									<button
										onClick={() => {
											dispatch(calculatorActions.setReset())
											handleHref("/wardrobe")
										}}
									>
										SEE YOUR WARDROBE
									</button>
								</BtnItem>
							</div>
						)}
					</div>
				}

				{!user && (
					<RegBlock>
						<h2>You want to see all your results?</h2>
						<p>
							Create an account, see all your results and get a 15% discount
							for your first order! Get exclusive offers, original stories,
							events and more.
						</p>
						<button onClick={() => handleHref("/register")}>
							register now
						</button>
					</RegBlock>
				)}
			</ResultsWrap>
		</Wrapper>
	)
}
export default Results
