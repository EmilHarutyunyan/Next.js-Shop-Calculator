import React from 'react'
import styled from 'styled-components'



function ImgCount({count,icon}) {
	const round = Math.ceil(count)
	return [...Array(round).keys()].map((item,id)=>{
		return (
			<ImgItem key={id}>
			<img src={icon} key={id} />
			</ImgItem>
		)
	})
}


function InfoCalc({ title, count, color="#323536", icon,weight }) {
	return (
		<InfoCalcWrap color={color}>
			<Text>
			{title}
			</Text>
			<Block>
				<Count color={color}>
				<span>
					{count}
				</span>
				<span>
					{weight}
				</span>
				</Count>
				<ImgItems>
					<ImgCount count={count} icon={icon} />
				</ImgItems>
			</Block>
		</InfoCalcWrap>
	)
}

const InfoCalcWrap = styled.div`
	color: ${props => props.color};
	margin-top: 25px;
`
const Text = styled.h6`
	font-size: 14px;
	line-height: 23px;
	font-weight: 300;
	font-family: "Tiempos";
	letter-spacing: 0px;
`
const Block = styled.div`
	display: flex;
	align-items: center;
	column-gap: 20px;
	img {
		font-size: 0;
	}
`;
const Count = styled.div`
	font-family: "Basic-Sans";
	font-size: 30px;
	line-height: 36px;
	span {
		padding-right: 10px;
		:last-child {
			padding-right: 0;
		}
	}
`

const ImgItems = styled.div`
	
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	column-gap: 10px;
	row-gap: 10px;
	
`
const ImgItem = styled.div`
	font-size: 0;
`
export default InfoCalc