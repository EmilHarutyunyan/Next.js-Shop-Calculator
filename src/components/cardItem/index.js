import React from "react"
import { Wrapper, Items, Item, Icon, AddText } from "./CardItem.styles"
function CardItem({ cards, width, height, handlerCard = f => f, handleRouter=f=>f, cardSelect }) {
	
	return (
		<Wrapper>
			{cards &&
				cards.map((card,idx) => {
					const { icon, text, _id } = card
					
					return (
						<Items
							key={idx}
							onClick={e => {

								handlerCard(card.text)
								handleRouter()
							}}
							className={
								cardSelect === card.text
									? ""
									: cardSelect && cardSelect !== card.text
									? "no-active"
									: ""
							}
						>
							<Item width={width} height={height}>
								<Icon>
									<img src={icon} alt={text} />
								</Icon>
								<AddText>{text}</AddText>
							</Item>
						</Items>
					)
				})}
		</Wrapper>
	)
}

export default CardItem
