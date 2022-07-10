import styled from "styled-components"
export const Hero = styled.div`
			background:url(${({ image }) => image});
			background-repeat: no-repeat;
			background-size: cover;
			position: fixed;
			right: 0;
			bottom: 0;
			min-width: 100%;
			min-height: 100%;
			z-index: -1;
		`
