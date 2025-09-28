import { useState } from 'react';
import { ErrorInput } from '../types.ts';

const notValidErrorsMap: {
	[key: string]: ErrorInput;
} = {
	email: {
		valueMissing: 'Email is required',
		typeMismatch: 'Email is invalid',
	},
	password: {
		valueMissing: 'Password is required',
		typeMismatch: 'Password is invalid',
	},
	firstName: {
		valueMissing: 'First name is required',
	},
	lastName: {
		valueMissing: 'Last name is required',
	},
};

export const useCheckValidation = (requiredErrorsMap: string[]) => {
	const [errors, setErrors] = useState<ErrorInput>({});
	const [touched, setTouched] = useState<ErrorInput<boolean>>({});

	const hasRequiredErrors = !!Object.keys(errors).find((key) => {
		if (requiredErrorsMap.includes(key) && errors[key]) {
			return true;
		}
	});

	const validationHandler = (validity: ValidityState, name: string) => {
		setTouched((prev) => ({ ...prev, [name]: true }));

		if (validity.valueMissing) {
			return setErrors({
				...errors,
				[name]: notValidErrorsMap[name].valueMissing,
			});
		}
		if (validity.typeMismatch) {
			setErrors({
				...errors,
				[name]: notValidErrorsMap[name].typeMismatch,
			});
		} else {
			setErrors({
				...errors,
				[name]: undefined,
			});
			setTouched((prev) => ({ ...prev, [name]: false }));
		}
	};
	return {
		errors,
		touched,
		hasRequiredErrors,
		validationHandler,
	};
};
