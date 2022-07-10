import React from 'react'
import { SOCIALSDATA } from '../../data/SOCIALS'
import Link from "next/link"
import { SocialsWrap,Items,Item,Title } from './Socials.styles'
function Socials({title=""}) {
	
  return (
	<SocialsWrap>
		<Title>{title}</Title>
		<Items>
			{SOCIALSDATA.map(item => {
				const {id,name,icon,href} = item
				return (
					<Item key={id}>
						<Link href={href}>
							<a>
								<img src={icon} alt={name}/>
							</a>

						</Link>
					</Item>
				)
			})}
		</Items>
	</SocialsWrap>
  )
}

export default Socials