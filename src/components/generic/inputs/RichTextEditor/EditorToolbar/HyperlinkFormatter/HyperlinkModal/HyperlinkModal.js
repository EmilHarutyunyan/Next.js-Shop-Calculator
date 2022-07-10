// Third-party imports
import React from "react"
import { Formik, ErrorMessage } from "formik"
import * as Yup from "yup"

// Global imports
import { useHyperlinkEditor } from "@/hooks/richTextEditor"
import { TextInput, SubmitButton, Text } from "@/components/generic"

// Local imports
import { StyledButtons, StyledErrorMessage, StyledBackdrop, StyledForm } from "./styles"

////////////////////////////////////////////////////////////////////////////////

const HyperlinkModal = () => {
	const {
		URLValue,
		setURLValue,
		setFocusOnEditor,
		closeHyperlinkEdit,
		addHyperlinkToEditorState,
	} = useHyperlinkEditor()

	const textProps = {
		as: "h4",
		color: "white",
		textAlign: "center",
		children: "Enter Link",
	}

	const saveButtonProps = {
		children: "Save",
		style: {
			width: "100px",
			margin: "0px 10px",
			type: "submit",
		},
	}

	const cancelButtonProps = {
		onClick: () => {
			closeHyperlinkEdit()
		},
		children: "Cancel",
		style: {
			width: "100px",
			margin: "0px 10px",
		},
	}

	const formikProps = {
		enableReinitialize: true,
		initialValues: {
			URLValue: URLValue,
		},
		validationSchema: Yup.object({
			URLValue: Yup.string()
				.required("Please enter a URL.")
				.url("Please use valid URL sytnax."),
		}),
		onSubmit: () => {
			addHyperlinkToEditorState()
			setFocusOnEditor()
		},
	}

	const textInputProps = {
		onChange: value => setURLValue(value),
		type: "text",
		value: URLValue,
		name: "URLValue",
		style: {
			width: "240px",
			marginBottom: "-9px",
		},
	}

	return (
		<>
			<StyledBackdrop onClick={closeHyperlinkEdit} />
			<Formik {...formikProps}>
				<StyledForm>
					<Text {...textProps} />
					<TextInput autoFocus {...textInputProps} />
					<StyledErrorMessage>
						<ErrorMessage name="URLValue" />
					</StyledErrorMessage>
					<StyledButtons>
						<SubmitButton {...saveButtonProps} />
						<SubmitButton {...cancelButtonProps} />
					</StyledButtons>
				</StyledForm>
			</Formik>
		</>
	)
}

export default HyperlinkModal
