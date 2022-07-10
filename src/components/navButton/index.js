import { useRouter } from "next/router"
import React from "react"
import Link from "next/link"
// Styles
import { NavWrap, NavItem } from "./NavButton.styles"

function NavBtn({ pathPrev = "", pathNext = "", navClick=f=>f ,isCode }) {
	
	const router = useRouter()
	return (
		<NavWrap>
			<NavItem onClick={() => {
				 navClick("prev")
				 router.back()

				}
				}>
				<Link href={pathPrev}>
					<a>
						<img src={"/static/icons/arrow-white.png"} alt="arrow-back" />
						<span>Back</span>{" "}
					</a>
				</Link>
			</NavItem>
			<NavItem onClick={() => navClick("next")}>
				<Link href={pathNext}>
					<a>
						<span>Next</span>
						<img
							src={"/static/icons/arrow-white.png"}
							alt="arrow-back"
							className="arrow-next"
						/>
					</a>
				</Link>
			</NavItem>
		</NavWrap>
	)
}

export default NavBtn
