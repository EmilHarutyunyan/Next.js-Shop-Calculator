// Third-party imports

// Global imports
import actionTypes from "@/redux/actionTypes"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const setFormFields = formFields => ({
	type: actionTypes.formFields.SET_FORM_FIELDS,
	payload: formFields,
})

export const setFootprintFormInput = footprintValues => ({
	type: actionTypes.formFields.SET_FOOTPRINT_FORM_INPUT,
	payload: footprintValues,
})

export const setFootprintValues = footprintValues => ({
	type: actionTypes.formFields.SET_FOOTPRINT_VALUES,
	payload: footprintValues,
})

export const setBenchmarkValues = benchmarkValues => ({
	type: actionTypes.formFields.SET_BENCHMARK_VALUES,
	payload: benchmarkValues,
})
