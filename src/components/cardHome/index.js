import React from 'react'
import {Cards,Card,CardIcon,CardInfo,CardText} from "./CardHome.styles"
function CardHome({cards}) {
  return (
	<Cards>
		{cards.map((card) => {
			return (
				<Card key={card.id}>
					<CardIcon>
						<img src={card.icon} />
					</CardIcon>
					<CardInfo>
						<p>{card.info}</p>
					</CardInfo>
					<CardText>
						<p>{card.text}</p>
					</CardText>
				</Card>
			)
		})}
	</Cards>
  )
}

export default CardHome