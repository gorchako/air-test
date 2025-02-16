import { helpers, minLength, required, numeric } from "@vuelidate/validators";

const { withMessage, regex } = helpers

const validationMessages = {
    required: 'Обязательное поле',
    incorrect: 'Поле заполнено некорректно'
}

export const validationRules = {
    companyName: {
        required: withMessage(validationMessages.required, required),
        regex: withMessage(validationMessages.incorrect, regex(/^[a-яА-Я\s]*$/))
    },
    phone: {
        required: withMessage(validationMessages.required, required),
        minLength: withMessage(validationMessages.required, minLength(18))
    },
    placementType: {
        required: withMessage(validationMessages.required, required),
    },
    address: {
        required: withMessage(validationMessages.required, required),
    },
    placementArea: {
        from: {
            required: withMessage(validationMessages.required, required),
            numeric: withMessage(validationMessages.incorrect, numeric)
        },
        to: {
            required: withMessage(validationMessages.required, required),
            numeric: withMessage(validationMessages.incorrect, numeric)
        }
    },
    rentDate: {
        from: {
            required: withMessage(validationMessages.required, required)
        },
        to: {
            required: withMessage(validationMessages.required, required)
        }
    }
}