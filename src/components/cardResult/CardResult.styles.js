import styled from "styled-components";

export const CardResultWrap = styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
// max-width:900px;
justify-content: space-around;

	margin:0 auto;
	margin-bottom:150px;
	@media only screen and (max-width: 768px) {
		max-width:678px;
			justify-content: space-between;
	}
`;
export const CardBlock = styled.div`
width:100%;
	max-width:500px;
	@media only screen and (max-width: 768px) {
		max-width:266px;
			
	}

`;
export const Info = styled.div`
	width:100%;
	max-width:500px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	@media only screen and (max-width: 768px) {
		max-width:320px;
			
	}
	@media only screen and (max-width: 600px) {
		width:100%;
		margin-top:50px;
		text-align:center
	}
	h3 {
		font-size:20px;
		color:#323536;
		line-hight:24px;
		font-weight: bold;

	}
	p {

	}
`;
export const Btn = styled.button`
	all:unset;
	background-color: #323536;
	color: #f4f1f0;
	font-weight: bold;
	font-size: 14px;
	line-height: 17px;
	padding: 15px;
	border-radius: 2px;
	text-transform: uppercase;
	cursor: pointer;
	transition: all 0.3s ease-in;
	margin-top:20px;
	max-width: 145px;
	:hover {
		opacity: 0.9;
	}
	@media only screen and (max-width: 600px) {
		max-width: none;
	}
`;