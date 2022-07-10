import React, { useState } from 'react'
import Wrapper  from '@/components/wrapper';
import  VideoBanner  from '@/components/videoBanner';
import { useRouter } from 'next/router';
import {
	MyProductWrap,
	Form,
	BtnWrap,
	BtnItem,
	BtnOne,
	BtnTwo,
	InputItem,
	Title,
	Desc,
} from "@/styles/pageStyle/MyProduct.styles"
function MyProduct() {
	const router = useRouter()

	const [nameProduct,setNameProduct] = useState("")
	
  return (
		<Wrapper>
			<MyProductWrap>
				<VideoBanner
					videoSrc={
						"https://footprint-b2c.s3.eu-central-1.amazonaws.com/Textil.mp4"
					}
				/>
				<Title>My product is missing</Title>
				<Desc>
					If you cannot find a category to relate to your product item, leave
					feedback. We are continuously working on including more items into our
					item category list. We will come up with other items in the future.
				</Desc>
				<Form>
					<InputItem>
						<input type="text" value={nameProduct} onChange={(e)=> setNameProduct(e.target.value)} placeholder="Name of product" />
					</InputItem>

					<BtnWrap>
						<BtnItem>
							<BtnOne type="button" onClick={() => router.back()}>
								NO THANK YOU
							</BtnOne>
						</BtnItem>
						<BtnItem>
							<BtnTwo onClick={() => router.push("/wardrobe")}>
								SEND SUGGESTION
							</BtnTwo>
						</BtnItem>
					</BtnWrap>
				</Form>
			</MyProductWrap>
		</Wrapper>
  )
}

export default MyProduct