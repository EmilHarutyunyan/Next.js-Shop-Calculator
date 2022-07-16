import React from "react"
import Link from "next/link"

import { Content, ContentItem, ImgWrap, Wrapper, ImgWrapLog } from "./Header.styles"
import { getJwtToken } from "@/lib"
// Styles

function Header({ color = "black" }) {
	const token = getJwtToken()

	return (
		<Wrapper>
			<Content>
				<ContentItem>
					<ImgWrap>
						<Link href="/">
							<a>
								<img
									className="header-logo"
									src={`/static/icons/logo-${color}.png`}
								/>
							</a>
						</Link>
					</ImgWrap>
				</ContentItem>

				<ContentItem className="header-block">
					<ImgWrapLog className="header-block-login">
						
							<Link href="/wardrobe">
								<a>
									<img
										className="header-login"
										src={`/static/icons/login-${color}.png`}
									/>
								</a>
							</Link>
						
					</ImgWrapLog>
				</ContentItem>
			</Content>
		</Wrapper>
	)
}

export default Header
