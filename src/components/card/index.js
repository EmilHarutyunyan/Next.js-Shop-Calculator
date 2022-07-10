import React from 'react'
import { CardWrap,Container } from './Card.styles'

function Card({userInfo}) {
  return (
	<CardWrap>
		{/* <img src={userInfo.img} alt={userInfo.title}/> */}
		<img src="/static/images/woman.webp" alt="person"/>
		<Container>
			{/* <h3>{userInfo.title}</h3> */}
			<h3>ORGANICATION</h3>
			{/* <h4>{userInfo.desc}</h4> */}
			<h4>Bluse aus Bio-Baumwolle und Leinen</h4>
			{/* <p>€{userInfo.price}</p> */}
			<p>€59,90</p>
		</Container>
	</CardWrap>
  )
}

export default Card