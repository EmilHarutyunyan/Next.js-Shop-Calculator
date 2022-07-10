// Third-party imports
import React from "react"
import { storiesOf } from "@storybook/react"
import centered from "@storybook/addon-centered/react"
import { action } from "@storybook/addon-actions"

// Global imports

// Local imports
import SubmitButton from "./SubmitButton"

////////////////////////////////////////////////////////////////////////////////

storiesOf("Generic|Buttons/SubmitButton", module)
	.addDecorator(centered)
	.add("default", () => (
		<SubmitButton onClick={() => action("clicked")()}>{"Add section"}</SubmitButton>
	))
