import React,{useState,useEffect} from "react"
import InputCode from "@/components/inputCode"
import ReadMore from "@/components/readMore"
import VideoBanner from "@/components/videoBanner"
import Wrapper from "@/components/wrapper"
import NavBtn from "@/components/navButton"
import { TimeWrap, DataBuy } from "@/styles/pageStyle/Time.styles"
import Heading from "@/components/heading"
import { useDispatch, useSelector } from "react-redux"
import { calculatorActions } from "@/redux/actions"
function Time() {
	const calc = useSelector(({ calculator }) => calculator)
	const productAgeTimescale = calc.productAgeTimescale ? new Date().getFullYear() - calc.productAgeTimescale : null
	const [code, setCode] = useState(productAgeTimescale)
	const [isCode,setIsCode]= useState(!!calc.productAgeTimescale)
	const [codeLength, setCodeLength] = useState([])
	const dispatch = useDispatch()
	useEffect(() => {
		if (codeLength.length === 4) {
			addTime()
			setIsCode(true)
		}
	}, [code])

	const navClick = (info) => {
		
		if(info === 'next' && isCode) {
			addTime()
		} else if(info === 'prev') {
			setIsCode(null)
			setIsCode(false)
		}
	}
	
	const addTime = async () => {
			const d = new Date();
			const year = d.getFullYear();
			const productAgeAmount = year - code
			const productAgeTimescale = `${code}`;
			await dispatch(calculatorActions.setProductAge({productAgeTimescale}))
			await dispatch(calculatorActions.setProductAgeAmount({ productAgeAmount }))
	}
	return (
		<Wrapper iconColor={`white`}>
			<TimeWrap>
				<VideoBanner
					videoSrc={
						"https://footprint-b2c.s3.eu-central-1.amazonaws.com/Kleiderstange.mp4"
					}
				/>

				<Heading text={"When did you buy your item?"} />
				<ReadMore
					desc={`Choose the approximate year when the item was acquired. This helps in taking into consideration the time that has passed since then, and account for the total impact on the environment from washing and drying activity`}
				/>
				<DataBuy>
					<InputCode
						length={4}
						numberCode={code}
						collectCode={inputCode => {
							const num = inputCode.reduce(function (acc, val) {
								return acc + val
							}, "")
							setCode(+num)
							setCodeLength(num.split(""))
						}}
					/>
				</DataBuy>
			</TimeWrap>

			<NavBtn
				pathPrev="/wardrobe"
				pathNext={isCode ? "/homecountry" : ""}
				navClick={navClick}
				
			/>
		</Wrapper>
	)
}

export default Time
