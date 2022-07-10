import styled from "styled-components";

export const SocialsWrap = styled.div`
	display:flex;
	align-items:center;
	justify-content:center;
	flex-direction: column;
	margin:80px 0;
`;

export const Title = styled.span`
	font-size:20px;
	color:#323536;
	line-hight:24px;
	font-weight: bold;
	margin-bottom:5px;
`;
export const Items = styled.div`
	display:flex;
	align-items:center;
	flex-wrap:wrap;
`;

export const Item = styled.div`
	margin-right:15px;
	:last-child {
  		margin-right:0px;
	}
	transition:all 0.3s linear;
	img:hover {
		opacity:0.9;
	}
`;