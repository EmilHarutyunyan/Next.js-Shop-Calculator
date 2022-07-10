import React from 'react'
import Card from '../card'
import { CardResultWrap, Info, Btn, CardBlock } from './CardResult.styles'

function CardResult({title,suggText,btnText,userInfo}) {

  return (
	<CardResultWrap>
		<CardBlock>
			  <Card userInfo={userInfo} />
		</CardBlock>
		
		<Info>
			<h3>Our suggestion for you</h3>
			<p>
				Our Staiy Shirts ranks on position <b>4</b> among <b>500</b> other unique combinations of inputs entered for Shirts. It is better than <b>55%</b> of total <b>87</b> Shirts. Shop now and start a sustainable life!
			</p>
			<span></span>
			<Btn>SHOP WITH DISCOUNT</Btn>
		</Info> 
	</CardResultWrap>
  )
}

export default CardResult