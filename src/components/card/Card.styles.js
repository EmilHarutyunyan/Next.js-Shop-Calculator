import styled from "styled-components";

export const CardWrap = styled.div`
	
	background-color:white;
	img {
		width:100%;
		object-fit:cover;
		height:auto;
	}
	@media only screen and (max-width: 600px) {
		width:100%;
	}

`

export const Container = styled.div`
padding:10px;
	h3 {
		font-size:18px;
		font-weight: bold;
		margin:0;

	}
	h4 {
		font-size:13px;
		font-weight: bold;
		margin:0;
	}
	p {
		font-size:11px;
	}
`;