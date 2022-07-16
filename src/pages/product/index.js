import CardItem from "@/components/cardItem"
import Heading from "@/components/heading"
import NavBtn from "@/components/navButton"
import ReadMore from "@/components/readMore"
import VideoBanner from "@/components/videoBanner"
import Wrapper from "@/components/wrapper"
import React from "react"
import { useState, useEffect } from "react"
import { PRODUCT } from "@/data/PRODUCT"
import { ProductWrap } from "@/styles/pageStyle/Product.styles"
import axios from "axios"
import { API_URL } from "../../config/dev"
import { useDispatch, useSelector } from "react-redux"
import { calculatorActions } from "@/redux/actions"

// export async function getStaticProps() {
// 	const response = await axios.get(`${API_URL}item-type`)
// 	const data = response.data


// 	return {
// 		products: { products: data },
// 	}
// }
function Product() {
	
	const dispatch = useDispatch()
	const calc = useSelector(({ calculator }) => calculator)
	const itemTypeId = calc.itemTypeId
	const [productsGender, setProductsGender] = useState([])
	const [productGender, setProductGender] = useState("")
	const handlerProductGender = (text) => {
		const productName = productGender.name
		
		if (productName === text) {
			setProductGender("")
			return
		}
		const itemType = productsGender.filter(item => item.name === text)
		const { _id, name } = itemType[0]

		setProductGender({ itemTypeId: _id, name })
	}

	const navClick = info => {
		if (info === "next" && productGender) {
			addProduct()
		} else if (info === "prev") {
			setProductGender("")
		}
	}
	const addProduct = async () => {
		const itemTypeId = productGender.itemTypeId

		await dispatch(calculatorActions.setProduct({ itemTypeId }))
	}

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get(`${API_URL}item-type`)
			const data = response.data
			console.log(data, "datadatadata")
			// const joinData = PRODUCT.map((item, idx) => {
			// 	return {
			// 		...item,
			// 		...data[idx],
			// 	}
			// })

			// if (itemTypeId) {
			// 	const itemProduct = data.filter((item) => item._id === itemTypeId)
			// 	const { _id,name } = itemProduct[0]
			// 	const lowerName = name.toLowerCase()
			// 	setProductGender({ itemTypeId: _id, name: lowerName })

			// }
			setProductsGender(data)
		}
		fetchData()
	}, [])

	return (
		<Wrapper iconColor={`white`}>
			<ProductWrap>
				<VideoBanner
					videoSrc={
						"https://footprint-b2c.s3.eu-central-1.amazonaws.com/Kleiderstange.mp4"
					}
				/>
				<Heading text={"Select your item."} />
				<ReadMore
					desc={
						"Currently you can only evaluate environmental footprint for textiles/apparels. Select the item that belongs closest to the categories available in the list."
					}
				/>
				<CardItem
					cards={productsGender}
					handlerCard={handlerProductGender}
					cardSelect={productGender.name}
				/>
			</ProductWrap>
			<NavBtn
				pathPrev="/choose-gender"
				pathNext={productGender ? "/checkresult" : ""}
				navClick={navClick}
			/>
		</Wrapper>
	)
}

export default Product
