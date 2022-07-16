
import actionTypes from "../../../redux/actionTypes"


export const setProduct = itemTypeId => {
	return {
		type: actionTypes.calculator.SET_PRODUCT,
		payload: itemTypeId,
	}
}

export const setProductGender = productGender => {
	return {
		type: actionTypes.calculator.SET_PRODUCT_GENDER,
		payload: productGender,
	}
}
export const setProductAge = productAgeTimescale => {
  
	return {
		type: actionTypes.calculator.SET_PRODUCT_AGE_TIMESCALE,
		payload: productAgeTimescale,
	}
}
export const setProductAgeAmount = productAgeAmount => {
  
	return {
		type: actionTypes.calculator.SET_PRODUCT_AGE_AMOUNT,
		payload: productAgeAmount,
	}
}
export const setMaterialDistrit = materialDistribution => {
	
	return {
		type: actionTypes.calculator.SET_MATERIAL_DISTRIBUTION,
		payload: materialDistribution,
	}
}

export const setManufactCountry = manufacturingCountryName => {
	return {
		type: actionTypes.calculator.SET_MANUFACTURING_COUNTRY,
		payload: manufacturingCountryName,
	}
}
export const setCountryOfRes = countryOfResidenceName => {
	
	return {
		type: actionTypes.calculator.SET_COUNTRY_OF_RESIDENCELD,
		payload: countryOfResidenceName,
	}
}

export const setMotlyLaundry = monthlyLaundryFrequency => {
	return {
		type: actionTypes.calculator.SET_MONTLY_LAUNDRY_FREQUENCY,
		payload: monthlyLaundryFrequency,
	}
}
export const setWashMachinee = washMachineSetting => {
	return {
		type: actionTypes.calculator.SET_MACHINE_SETTING,
		payload: washMachineSetting,
	}
}
export const setDryingMethod = dryingMethod => {
	return {
		type: actionTypes.calculator.SET_DRYING_METHOD,
		payload: dryingMethod,
	}
}
export const setWashingTemperature = washingTemperature => {
	return {
		type: actionTypes.calculator.SET_WASHING_TEMPERATURE,
		payload: washingTemperature,
	}
}
export const setReset = () => {
	
	return {
		type: actionTypes.calculator.SET_RESET,
	}
}
// export const setWashing = washing => {
// 	return {
// 		type: actionTypes.calculator.SET_WASHING,
// 		payload: washing,
// 	}
// }