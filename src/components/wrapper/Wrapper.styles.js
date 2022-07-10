import styled from "styled-components";

export const Layout = styled.div`
			position: relative;
			width: 100%;
			margin: 0 auto;
			padding: 0 15px;
			max-width: 1770px;
			min-height: 100vh;
			@media only screen and (max-width: 768px) {
				padding: 0px;
			}
		`

export const Content = styled.main`
			min-height: 100vh;
			display: flex;
			flex-direction: column;
			@media only screen and (max-width: 768px) {
				padding: 60px 80px;
			}
			@media only screen and (max-width: 425px) {
				padding: 40px 30px;
			}
		`
export const ContentItem = styled.section`
			flex: 1;
			display: flex;
			flex-direction: column;
			
		`