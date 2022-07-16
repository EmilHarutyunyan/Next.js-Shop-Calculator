import Heading from "@/components/heading"
import NavBtn from "@/components/navButton"
import ReadMore from "@/components/readMore"
import SelectMaterial from "@/components/SelectMaterial"
import VideoBanner from "@/components/videoBanner"
import Wrapper from "@/components/wrapper"

import React from "react"
import { useState, useEffect, useRef } from "react"
import {
	Count,
	MaterialWrap,
	Pricent,
	MaterialContetn,
	Content,
	ActionBtn,
	Item,
	Items,
	Icon,
	AddText,
	MaterialItem,
	MaterialLayout,
} from "@/styles/pageStyle/Material.styles"
import { MATERIALDATA } from "@/data/MATERIALDATA"
import axios from "axios"
import { API_URL } from "../../config/dev"
import { useDispatch, useSelector } from "react-redux"
import { calculatorActions } from "@/redux/actions"
import InputPricent from "../../components/inputPricent"
// export const getStaticProps = async () => {
// 	const response = await fetch("https://api-prod.staiy.com/material")
// 	const data = await response.text()
// 	return {
// 		props: { material: data },
// 	}
// }

function Material() {
	const dispatch = useDispatch()
	const calc = useSelector(({ calculator }) => calculator)

	const [materialName, setMaterialName] = useState([])
	const [materialInfo, setMaterialInfo] = useState([])
	const countMaterial = 3
	const pricentRef = useRef("")
	const handlePricent = (_id, value) => {
		const tempMaterial = []

		materialInfo.map(item => {
			if (_id === item._id) {
				item.pricent = value
			}
			return tempMaterial.push(item)
		})
		setMaterialInfo(tempMaterial)
	}
	const handleText = (oldName, newName) => {
		const tempMaterial = materialInfo.map(item => {
			if (oldName === "Msterial") {
				if (item.name === oldName || item._id === newName._id) {
					return {
						...item,
						...newName,
					}
				}
			} else if (item.name === oldName || item._id === newName._id) {
				return {
					...item,
					...newName,
				}
			} else {
				return item
			}
		})
		setMaterialInfo([...tempMaterial])
	}

	const navClick = info => {
		if (info === "next" && materialInfo.length > 0) {
			addMaterial()
		} else if (info === "prev") {
			setMaterialInfo([])
		}
	}
	const addMaterial = async () => {
		const materialDistribution = materialInfo.map(item => {
			const { _id, pricent } = item
			const propation = parseInt(pricent) / 100
			return { _id, propation }
		})
		await dispatch(
			calculatorActions.setMaterialDistrit({
				materialDistribution: materialDistribution,
			})
		)
	}

	useEffect(() => {
		async function fetchData() {
			const data = await axios.get(`${API_URL}material`)
			setMaterialName(data.data)
			setMaterialInfo([
				{
					_id: Math.random(),
					name: "Material",
					pricent: 0,
				},
			])
		}
		fetchData()
	}, [])

	useEffect(() => {
		if (pricentRef.current) {
			console.log(pricentRef.current, "pricentRef.current")
		}
	}, [pricentRef])
	return (
		<Wrapper iconColor={"white"}>
			<MaterialLayout>
				<VideoBanner
					videoSrc={
						"https://footprint-b2c.s3.eu-central-1.amazonaws.com/Spule.mp4"
					}
				/>
				<Heading text={"Select the materials blend and its proportion."} />

				<ReadMore
					desc={
						"Material blend is the composition of different types of materials that your item is made up of. This information can be found on the item’s label. In the drop down menu select a material and then enter the respective percentage composition in the text box. Use the ‚+‘ icon to add the remaining materials and ‚ -‚ to delete. Different materials have varying impact on the environment due to the different techniques used in cultivation and manufacturing. If your item has more than 3 blends mentioned on the label, leave us feedback with a picture"
					}
				/>
				<MaterialWrap>
					{materialInfo.length > 0 &&
						materialInfo.map((material, idx) => {
							const { _id, name, pricent } = material

							return (
								<MaterialItem key={_id}>
									<MaterialContetn>
										<Count>
											<p>#{idx + 1}</p>
										</Count>

										<Content>
											<SelectMaterial
												materialData={materialName}
												handleText={handleText}
												materialThis={materialInfo[idx]}
											/>

											<Pricent>
												<InputPricent
													pricent={pricent}
													handlePricent={handlePricent}
													id={_id}
												/>
												<p>%</p>
											</Pricent>
											<ActionBtn
												onClick={() => {
													console.log(
														materialInfo.length,
														"materialInfo.lengthmaterialInfo.length"
													)
													if (
														materialInfo.length <
														countMaterial
													) {
														setMaterialInfo([
															...materialInfo,
															{
																_id: Math.random(),
																name: "Material",
																pricent: 0,
															},
														])
													}
												}}
											>
												<Items>
													<Item>
														<Icon>
															<img
																src="/static/svg/add-icon.svg"
																alt="plus"
															/>
														</Icon>
														<AddText>Add Material</AddText>
													</Item>
												</Items>
											</ActionBtn>
										</Content>
									</MaterialContetn>
								</MaterialItem>
							)
						})}
				</MaterialWrap>
			</MaterialLayout>
			<NavBtn
				pathPrev="/checkresult"
				pathNext={materialInfo.length > 0 ? "/checkresult" : ""}
				navClick={navClick}
			/>
		</Wrapper>
	)
}
Material.requireAuth = false
export default Material
