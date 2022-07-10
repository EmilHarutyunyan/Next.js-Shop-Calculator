import styled from "styled-components"
export const Wrapper = styled.header`
			padding-top: 57px;
			flex-shrink: 0;
			@media only screen and (max-width: 768px) {
				padding-top: 0px;
			}
		`
export const ImgWrapLog = styled.div`
	img {
		width: 100%;
		max-width: 30px;
		display: block;
		object-fit: cover;
		cursor: pointer;
	}
`

export const ImgWrap = styled.div`
	.header-logo {
		width: 100%;
		max-width: 83px;
		display: block;
		object-fit: cover;
		cursor: pointer;
	}
	
	.header-close {
		width: 100%;
		max-width: 30px;
		display: block;
		object-fit: cover;
		cursor: pointer;
	}
`
export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`

export const ContentItem = styled.div`
	&.header-block {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.header-block-login {
			margin-right: 20px;
		}
	}
`
