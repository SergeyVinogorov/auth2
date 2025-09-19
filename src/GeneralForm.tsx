import { ChangeEvent, FC, FocusEvent, FormEvent, ReactNode, useState } from 'react';
import { ErrorInput, HandlerMethod } from './shared/types.ts';

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

interface Props {
	children: (form: {
		errors: ErrorInput;
		touched: ErrorInput<boolean>;
		hasErrors: boolean;
		handleChange: HandlerMethod<ChangeEvent<HTMLInputElement>>;
		handleBlur: HandlerMethod<FocusEvent<HTMLInputElement>>;
		handleSubmit: HandlerMethod<FormEvent<HTMLFormElement>>;
		handleInvalid?: HandlerMethod<FormEvent<HTMLInputElement>>;
	}) => ReactNode;
}

export const GeneralForm: FC<Props> = ({ children }) => {
	const [errors, setErrors] = useState<ErrorInput>({});
	const [touched, setTouched] = useState<ErrorInput<boolean>>({});
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formTarget = event.currentTarget;
		const isValid = formTarget.checkValidity();
		if (!isValid) {
			formTarget.reportValidity();
			return;
		}
		const formData = new FormData(formTarget);
		console.log('sending data: ', Object.fromEntries(formData.entries()));
	};

	const checkValidity = (validity: ValidityState, name: string) => {
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
		}
	};

	const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
		const { validity, name } = event.target;
		setTouched((prev) => ({ ...prev, [name]: true }));
		checkValidity(validity, name);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { validity, name } = event.target;
		if (errors[name]) {
			checkValidity(validity, name);
		}
	};

	const handleInvalid = (event: FormEvent<HTMLInputElement>) => {
		(event.target as HTMLInputElement).setCustomValidity(' '); // Resetting the message
		const { validity, name } = event.target as HTMLInputElement;
		setTouched((prev) => ({ ...prev, [name]: true }));
		checkValidity(validity, name);
	};

	const hasErrors = !!errors['email'] || !!errors['password'];
	return (
		<div className="transition-hide">
			<form onSubmit={handleSubmit}>
				{children({
					errors,
					touched,
					hasErrors,
					handleChange,
					handleBlur,
					handleSubmit,
					handleInvalid,
				})}
			</form>
		</div>
	);
};
