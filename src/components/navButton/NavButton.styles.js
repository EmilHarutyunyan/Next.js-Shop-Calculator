import styled from "styled-components"

export const NavWrap = styled.div`
			display: flex;
			justify-content: space-between;
			flex-shrink: 0;
			margin-bottom: 59px;
			@media only screen and (max-width: 768px) {
				width: 100%;
				max-width: 607px;
				margin-top: 59px;
				margin-bottom: 0px;
			}
		`

export const NavItem = styled.div`
	width: 100%;
	max-width: 72px;
	a {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.arrow-next {
		transform: rotate(180deg);
	}
`
