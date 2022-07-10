// Third-party imports
import styled from "styled-components"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const EditorContent = styled.div`
	width: 100%;
	box-shadow: 0 0 8px 8px ${({ theme }) => theme.colors.black};
	padding-top: 0px;
`

export const EditorContainer = styled.div`
	.DraftEditor-root {
		background-color: ${({ theme }) => theme.colors.darkGray};
		color: ${({ theme }) => theme.colors.white};
		font-family: ${({ theme }) => theme.fonts.family};
		height: 100%;
		width: 100%;
	}
	.DraftEditor-editorContainer,
	.public-DraftEditor-content {
		min-height: 400px;
		width: 100%;
		padding: 10px;
	}
`
