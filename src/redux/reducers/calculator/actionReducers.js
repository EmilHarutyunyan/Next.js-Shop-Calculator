// Third-party imports

// Global imports
// import actionTypes from "@/redux/actionTypes"
import actionTypes from "../../../redux/actionTypes"
import initialState from "./initialState"
// Local imports

////////////////////////////////////////////////////////////////////////////////

const calculatorActionReducers = {
	[actionTypes.calculator.SET_PRODUCT]: (draft, action) => {
		draft.itemTypeId = action.payload.itemTypeId
	},
	[actionTypes.calculator.SET_PRODUCT_GENDER]: (draft, action) => {
		draft.productGender = action.payload.productGender
	},
	[actionTypes.calculator.SET_PRODUCT_AGE_TIMESCALE]: (draft, action) => {
		draft.productAgeTimescale = action.payload.productAgeTimescale
	},
	[actionTypes.calculator.SET_PRODUCT_AGE_AMOUNT]: (draft, action) => {
		draft.productAgeAmount = action.payload.productAgeAmount
	},
	[actionTypes.calculator.SET_MATERIAL_DISTRIBUTION]: (draft, action) => {
		draft.materialDistribution = action.payload.materialDistribution
	},
	[actionTypes.calculator.SET_MANUFACTURING_COUNTRY]: (draft, action) => {
		draft.manufacturingCountryName = action.payload.manufacturingCountryName
	},
	[actionTypes.calculator.SET_COUNTRY_OF_RESIDENCELD]: (draft, action) => {
		draft.countryOfResidenceName = action.payload.countryOfResidenceName
	},
	[actionTypes.calculator.SET_MONTLY_LAUNDRY_FREQUENCY]: (draft, action) => {
		draft.monthlyLaundryFrequency = action.payload.monthlyLaundryFrequency
	},
	[actionTypes.calculator.SET_MACHINE_SETTING]: (draft, action) => {
		draft.washMachineSetting = action.payload.washMachineSetting
	},
	[actionTypes.calculator.SET_DRYING_METHOD]: (draft, action) => {
		draft.dryingMethod = action.payload.dryingMethod
	},
	[actionTypes.calculator.SET_WASHING_TEMPERATURE]: (draft, action) => {
		draft.washingTemperature = action.payload.washingTemperature
	},
	[actionTypes.calculator.SET_RESET]: (draft, action) => {
		
		draft = initialState
	},
	// [actionTypes.calculator.SET_WASHING]: (draft, action) => {

	// 	draft.washMachineSetting = action.payload.washing.washMachineSetting
	// 	draft.dryingMethod = action.payload.washing.dryingMethod
	// 	draft.washingTemperature = action.payload.washing.washingTemperature
	// 	draft.monthlyLaundryFrequency = action.payload.washing.monthlyLaundryFrequency
	// },
}

export default calculatorActionReducers
