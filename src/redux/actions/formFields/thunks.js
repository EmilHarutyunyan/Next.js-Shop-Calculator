// Third-party imports

// Global imports
import { requestsActions } from "@/redux/actions"
import actionTypes from "@/redux/actionTypes"
import * as formFieldsActions from "./actionCreators"

// Local imports

////////////////////////////////////////////////////////////////////////////////

export const fetchFormFields = () => async dispatch => {
	const success = response => {
		const formFields = response.data
		return dispatch(formFieldsActions.setFormFields(formFields))
	}

	const failure = error => {
		console.log(error)
	}

	return dispatch(
		requestsActions.request({
			actionType: actionTypes.requestTypes.FETCH_FORM_FIELDS,
			config: {
				method: "get",
				url: `b2c/form-fields`,
			},
			success,
			failure,
		})
	)
}

/**
 * @function processValues
 * @description Function used to process the form values until we figure out how to do the Yup schema properly.
 */
const processValues = values => {
	const processedValues = { ...values }

	delete processedValues.itemType
	delete processedValues.productMaterial
	delete processedValues.acquisitionDateYear
	delete processedValues.laundryFrequency
	delete processedValues.countryOfResidence
	delete processedValues.manufacturingCountry

	const matPropportions = values.productMaterial.map(p => {
		return { _id: p._id, proportion: p.proportion / 100 }
	})

	processedValues["materialDistribution"] = matPropportions
	processedValues["itemTypeId"] = values.itemType
	processedValues["productAgeTimescale"] = "years"
	processedValues["productAgeAmount"] = 2022 - Number(values.acquisitionDateYear)
	processedValues["yearlyLaundryFrequency"] = Number(values.laundryFrequency)
	processedValues["manufacturingCountryId"] = values.manufacturingCountry
	processedValues["countryOfResidenceId"] = values.countryOfResidence
	processedValues["washingTemperature"] = values.washMachineTemperatureSetting

	return processedValues
}

export const calculateFootprint = (values, token) => async dispatch => {
	const success = response => {
		const footprintValues = response.data
		dispatch(formFieldsActions.setFootprintFormInput(values))
		dispatch(formFieldsActions.setFootprintValues(footprintValues.footprintResult))
		dispatch(formFieldsActions.setBenchmarkValues(footprintValues.benchmark))
		return
	}

	const failure = error => {
		console.log("VALUES", processValues(values), "\nERROR", error)
	}

	return dispatch(
		requestsActions.request({
			actionType: actionTypes.requestTypes.FETCH_FORM_FIELDS,
			config: {
				method: "post",
				url: `b2c/footprint`,
				data: processValues(values),
				headers: { Authorization: `Bearer ${token}` },
			},
			success,
			failure,
		})
	)
}
