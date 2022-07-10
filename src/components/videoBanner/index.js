import React from 'react'

import {Video} from "./VideoBanner"
function VideoBanner({videoSrc}) {
  return (
		<Video autoPlay muted loop className="video-banner">
			<source src={videoSrc} type="video/mp4" />
		</Video>
  )
}

export default VideoBanner