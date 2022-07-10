import React, { useState } from "react"
import Wrapper from "@/components/wrapper"
import VideoBanner from "@/components/videoBanner"
import { useRouter } from "next/router"
import  axios from 'axios';
import { API_URL } from '@/config';
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


function Verificate() {
	const router = useRouter()

	const [verifCode, setVerifCode] = useState("")
	const [verifMail, setVerifMail] = useState("")
	const [errorMsg,setErrorMsg] = useState("")
	 async function handleSubmit(event) { 
			event.preventDefault()
			try {
				const data = await axios.post(`${API_URL}auth/b2c/verify`, {
					verificationCode: verifCode,
					email: verifMail,
				})
				
				if (data.status === 201) {
					router.push('/wardrobe')
				}
			} catch (error) {
				
				setErrorMsg('Error while verifying account')
			}
			
			
		}
	return (
		<Wrapper>
			<MyProductWrap>
				{/* <VideoBanner
					videoSrc={
						"https://footprint-b2c.s3.eu-central-1.amazonaws.com/Textil.mp4"
					}
				/> */}
				<Title>Verificate</Title>
				<Form onSubmit={handleSubmit}>
					{errorMsg && <p style={{color:'red'}}>{errorMsg}</p>}
					<InputItem>
						<input
							type="text"
							value={verifMail}
							onChange={e => setVerifMail(e.target.value)}
							placeholder="Email"
						/>
					</InputItem>
					<InputItem style={{marginTop:'15px'}}>
						<input
							type="number"
							value={verifCode}
							onChange={e => setVerifCode(e.target.value)}
							placeholder="Verificate Code"
						/>
					</InputItem>
					<BtnWrap>
						<BtnItem>
							<BtnTwo>SEND</BtnTwo>
						</BtnItem>
					</BtnWrap>
				</Form>
			</MyProductWrap>
		</Wrapper>
	)
}

export default Verificate
