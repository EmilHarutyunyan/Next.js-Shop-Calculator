import useHideShow from '@/hooks/useHideShow'
import React, { useRef } from 'react'
import { useState } from 'react'
import { ReadMoreWrap, Descrip, Text, Content } from "./ReadMore.styles"

function ReadMore({desc}) {

  const [isReadMore, setIsReadMore] = useState(false)
  const [headerRef, childrenRef, setShowLinks] = useHideShow() 
	
  const toggleReadMore = () => {
		setIsReadMore(!isReadMore)
  }
  return (
		<ReadMoreWrap>
			<Text
				onClick={() => {
					setShowLinks(show => !show)
					toggleReadMore()
				}}
			>
				{!isReadMore ? <>Read more +</> : <>Close - </>}
			</Text>
			<Content ref={headerRef}>
				<Descrip ref={childrenRef}>
					{desc}
				</Descrip>
			</Content>
		</ReadMoreWrap>
  )
}

export default ReadMore