import styled from "styled-components";

export const FashionWrap = styled.div`
	margin-top: 36px;
	margin-bottom: 26px;
	width: 100%;
	max-width: 620px;
	.item-product {
		position: relative;
		width: 150px;
		transform: translate(100px, 0px);
		.item {
			background: #eb5846 0% 0% no-repeat padding-box;
			border: 1px solid #eb5846;
			border-radius: 47px;
			width: 97px;
			height: 97px;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			img {
				height: auto;
				width: 50px;
			}
		}
		.score {
			position: absolute;
			top: -3px;
			right: 24px;
			background: #eb5846 0% 0% no-repeat padding-box;
			border: 1px solid #eb5846;
			border-radius: 47px;
			width: 50px;
			height: 50px;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			font-size: 14px;
			line-height: 14px;
		}
	}

	.line {
		display: flex;
		align-items: center;
		justify-content: space-between;
		&-1 {
			&-text {
				display: flex;
				align-items: center;
				flex-direction: column;
				span {
					border: 1px solid #eb5846;
					color: #eb5846;
					padding: 6px 15px;
					font-weight: bold;
				}
			}
		}
		&-2 {
			margin-top: 20px;
			&-text {
				display: flex;
				align-items: center;
				flex-direction: column;
				span {
					border: 1px solid #5bb56c;
					color: #5bb56c;
					padding: 6px 15px;
					font-weight: bold;
				}
			}
		}
	}
`