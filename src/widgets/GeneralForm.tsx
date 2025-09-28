import { ChangeEvent, FC, FocusEvent, FormEvent, ReactNode } from 'react';
import { ErrorInput, HandlerMethod } from 'shared/types.ts';
import { useCheckValidation } from 'shared';

interface Props {
	requiredFields: string[];
	className?: string;
	onSubmit: (values: FormData) => void;
	children: (form: {
		errors: ErrorInput;
		touched: ErrorInput<boolean>;
		hasRequiredErrors: boolean;
		handleChange: HandlerMethod<ChangeEvent<HTMLInputElement>>;
		handleBlur: HandlerMethod<FocusEvent<HTMLInputElement>>;
		handleSubmit: HandlerMethod<FormEvent<HTMLFormElement>>;
		handleInvalid?: HandlerMethod<FormEvent<HTMLInputElement>>;
	}) => ReactNode;
}

export const GeneralForm: FC<Props> = ({ requiredFields, onSubmit, className, children }) => {
	const { errors, touched, validationHandler, hasRequiredErrors } =
		useCheckValidation(requiredFields);
	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formTarget = event.currentTarget;
		const isValid = formTarget.checkValidity();
		if (!isValid) {
			formTarget.reportValidity();
			return;
		}
		const formData = new FormData(formTarget);
		onSubmit(formData);
	};

	const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
		const { validity, name } = event.target;
		validationHandler(validity, name);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { validity, name } = event.target;
		if (errors[name]) {
			validationHandler(validity, name);
		}
	};

	const handleInvalid = (event: FormEvent<HTMLInputElement>) => {
		(event.target as HTMLInputElement).setCustomValidity(' '); // Resetting the message
		const { validity, name } = event.target as HTMLInputElement;
		validationHandler(validity, name);
	};

	return (
		<div className="hide-transition">
			<form onSubmit={handleSubmit} className={className}>
				{children({
					errors,
					touched,
					hasRequiredErrors,
					handleChange,
					handleBlur,
					handleSubmit,
					handleInvalid,
				})}
			</form>
		</div>
	);
};
