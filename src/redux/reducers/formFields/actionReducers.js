// Third-party imports

// Global imports
import actionTypes from "@/redux/actionTypes"

// Local imports

////////////////////////////////////////////////////////////////////////////////

const actionReducers = {
	[actionTypes.formFields.SET_FORM_FIELDS]: (draft, action) => {
		draft.countries = action.payload.countries
		draft.itemTypes = action.payload.itemTypes
		draft.materials = action.payload.materials
	},
	[actionTypes.formFields.SET_FOOTPRINT_FORM_INPUT]: (draft, action) => {
		draft.formValues = action.payload
	},
	[actionTypes.formFields.SET_FOOTPRINT_VALUES]: (draft, action) => {
		draft.CO2Footprint = action.payload.CO2Footprint
		draft.waterFootprint = action.payload.waterFootprint
		draft.eqDaysDrinkWater = action.payload.eqDaysDrinkWater
		draft.eqCO2KmByCar = action.payload.eqCO2KmByCar
	},
	[actionTypes.formFields.SET_BENCHMARK_VALUES]: (draft, action) => {
		draft.positionUniqueCombination = action.payload.positionUniqueCombination
		draft.positionGeneral = action.payload.positionGeneral
		draft.item = action.payload.item
		draft.percentage = action.payload.percentage
		draft.totalUniqueCombination = action.payload.totalUniqueCombination
		draft.totalGeneral = action.payload.totalGeneral
	},
}

export default actionReducers
