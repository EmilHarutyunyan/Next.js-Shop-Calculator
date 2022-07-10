import styled from "styled-components"

export const CodeInput = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	width: 100%;
	max-width: 452px;
	background: #fff;
	margin: 0 auto;
	padding: 27px 0;
`

export const CodeLabel = styled.div`
	margin-bottom: 16px;
`

export const CodeInputs = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	width: 100%;
	justify-content: space-between;

	input {
		border: none;
		background-image: none;
		background-color: white;
		color: #3e3e3e;
		font-size: 80px;
		box-shadow: none;
		text-align: center;
		height: 75px;
		border-right: 2px solid #f4f1f0;
		width: 100%;
		max-width: 113px;

		:focus {
			outline: none;
		}
	}
`
