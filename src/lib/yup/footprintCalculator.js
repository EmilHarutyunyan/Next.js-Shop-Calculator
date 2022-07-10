// Third-party imports
import * as Yup from "yup"

// Global imports

// Local imports

////////////////////////////////////////////////////////////////////////////////

const skipSchema = {
	initialValue: false,
}

const productGenderSchema = {
	initialValue: "",
	validationSchema: Yup.string()
		.oneOf(["male", "female", "unisex"])
		.required("Please indicate which gender is the product meant for."),
}

const itemTypeSchema = {
	initialValue: "",
	validationSchema: Yup.string().required("Please enter your item's type."),
}

const productMaterialSchema = {
	initialValue: [{ _id: "", proportion: "" }],
	validationSchema: Yup.array().of(
		Yup.object().shape({
			_id: Yup.string().required("Please enter your item's material."),
			proportion: Yup.number()
				.max(100, "Max value is 100")
				.min(1, "Min value is 1")
				.required("Please enter your material's proportion."),
		})
	),
}

const acquisitionDateSchema = {
	year: {
		initialValue: "",
		validationSchema: Yup.number().when("skip", {
			is: skip => skip === false,
			then: Yup.number()
				.integer("A year should be an integer.")
				.positive("A year should be a positive number.")
				.required(
					"Please enter the approximative month of your item's acquisition."
				),
		}),
	},
}

const laundryFrequencySchema = {
	initialValue: "",
	validationSchema: Yup.number().when("skip", {
		is: skip => skip === false,
		then: Yup.number()
			.positive("Laundry frequency should be positive.")
			.required(
				"Please enter the approximative amount of times you wash the item per month."
			),
	}),
}

const countryOfResidenceSchema = {
	initialValue: "",
	validationSchema: Yup.string().when("skip", {
		is: skip => skip === false,
		then: Yup.string().required("Please enter your country of residence."),
	}),
}

const manufacturingCountrySchema = {
	initialValue: "",
	validationSchema: Yup.string().required(
		"Please enter your item's manufacturing country."
	),
}

const washMachineSettingSchema = {
	initialValue: "",
	validationSchema: Yup.string().when("skip", {
		is: skip => skip === false,
		then: Yup.string()
			.oneOf(["Normal", "Eco", "Quick", "Handwash"])
			.required("Please tell us your washing machine's setting."),
	}),
}

const washMachineTemperatureSchema = {
	initialValue: "",
	validationSchema: Yup.string().when("skip", {
		is: skip => skip === false,
		then: Yup.string()
			.oneOf(["30", "40", "Auto", "60", "90"])
			.required("Please tell us your washing machine's temperature setting."),
	}),
}

const dryingMethodSchema = {
	initialValue: "",
	validationSchema: Yup.string().when("skip", {
		is: skip => skip === false,
		then: Yup.string()
			.oneOf(["Air-dried", "Machine-dried"])
			.required("Please tell us how you dry your item."),
	}),
}

/**
 * @object footprintCalculatorSchema
 * @category Yup
 * @description Schema for the footprint calculator form.
 */
export const footprintCalculatorSchema = {
	initialValues: {
		skip: skipSchema.initialValue,
		productGender: productGenderSchema.initialValue,
		itemType: itemTypeSchema.initialValue,
		productMaterial: productMaterialSchema.initialValue,
		acquisitionDateYear: acquisitionDateSchema.year.initialValue,
		laundryFrequency: laundryFrequencySchema.initialValue,
		countryOfResidence: countryOfResidenceSchema.initialValue,
		manufacturingCountry: manufacturingCountrySchema.initialValue,
		washMachineSetting: washMachineSettingSchema.initialValue,
		washMachineTemperatureSetting: washMachineTemperatureSchema.initialValue,
		dryingMethod: dryingMethodSchema.initialValue,
	},
	validationSchema: Yup.object({
		productGender: productGenderSchema.validationSchema,
		itemType: itemTypeSchema.validationSchema,
		productMaterial: productMaterialSchema.validationSchema,
		acquisitionDateYear: acquisitionDateSchema.year.validationSchema,
		laundryFrequency: laundryFrequencySchema.validationSchema,
		countryOfResidence: countryOfResidenceSchema.validationSchema,
		manufacturingCountry: manufacturingCountrySchema.validationSchema,
		washMachineSetting: washMachineSettingSchema.validationSchema,
		washMachineTemperatureSetting: washMachineTemperatureSchema.validationSchema,
		dryingMethod: dryingMethodSchema.validationSchema,
	}),
}
