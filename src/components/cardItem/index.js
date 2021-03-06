import React from "react"
import { Wrapper, Items, Item, Icon, AddText } from "./CardItem.styles"
function CardItem({ cards, width, height, handlerCard = f => f, handleRouter=f=>f, cardSelect }) {
	
	return (
		<Wrapper>
			{cards &&
				cards.map((card,idx) => {
					const { icon, text, _id, name } = card
					
					return (
						<Items
							key={idx}
							onClick={e => {
								handlerCard(card.name)
								handleRouter()
							}}
							className={
								cardSelect === card.name
									? ""
									: cardSelect && cardSelect !== card.name
									? "no-active"
									: ""
							}
						>
							<Item width={width} height={height}>
								<Icon>
									<img src={icon} alt={name} />
								</Icon>
								<AddText>{name}</AddText>
							</Item>
						</Items>
					)
				})}
		</Wrapper>
	)
}

export default CardItem
