// Third-party imports
import React from "react"
import moment from "moment"
// Global imports

// Local imports
import { CardContainer } from "./styles"

////////////////////////////////////////////////////////////////////////////////

/**
 * @function Card
 * @category Common
 */
const Card = ({ main, secondary, third, fourth }) => {
	return (
		<CardContainer>
			<div>
				<div className="container">
					<p>
						{main.label} <strong>{main.value}</strong>
					</p>
					<p>
						{secondary.label} <strong>{secondary.value}</strong>
					</p>
					<p>
						{third.label} <strong>{third.value}</strong>
					</p>
					<p>
						{fourth.label}{" "}
						<strong>{moment(fourth.value).format("MMMM Do YYYY")}</strong>
					</p>
				</div>
			</div>
		</CardContainer>
	)
}

export default Card
