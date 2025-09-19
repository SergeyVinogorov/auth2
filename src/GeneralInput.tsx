import { FC, HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute } from 'react';
import { ErrorInput, HandlerMethod } from './shared/types.ts';
import { ChangeEvent, FocusEvent, FormEvent } from 'react';

interface Props {
	name: string;
	errors: ErrorInput;
	id?: string;
	autoComplete?: HTMLInputAutoCompleteAttribute;
	type?: HTMLInputTypeAttribute;
	required?: boolean;
	onBlurHandler?: HandlerMethod<FocusEvent<HTMLInputElement>>;
	onChangeHandler?: HandlerMethod<ChangeEvent<HTMLInputElement>>;
	onInvalidHandler?: HandlerMethod<FormEvent<HTMLInputElement>>;
	labelText: string;
	touched: ErrorInput<boolean>;
}

export const GeneralInput: FC<Props> = ({
	type,
	name,
	id,
	autoComplete,
	required,
	errors,
	onBlurHandler,
	onChangeHandler,
	onInvalidHandler,
	labelText,
	touched,
}) => {
	return (
		<label>
			<div>{labelText}</div>
			<input
				type={type}
				name={name}
				id={id}
				autoComplete={autoComplete}
				required={required}
				aria-invalid={!!errors[name]}
				aria-errormessage={`${name}-error`}
				onBlur={onBlurHandler}
				onChange={onChangeHandler}
				onInvalid={onInvalidHandler}
				className={touched[name] ? 'touched' : ''}
			/>
			<div id={`${name}-error`} role="alert" hidden={!errors[name]} className="error-text">
				{errors[name]}
			</div>
		</label>
	);
};
