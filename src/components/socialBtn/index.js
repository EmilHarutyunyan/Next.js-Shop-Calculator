import React from 'react'

import {Btn,ImgWrap,Title} from "./SocialBtn.styles"
function SocialBtn({icon,title}) {
  
  return (
	<Btn>
		<ImgWrap>
			<img src={icon} alt="social" />
		</ImgWrap>
		<Title>{title}</Title>
	</Btn>
  )
}

export default SocialBtn