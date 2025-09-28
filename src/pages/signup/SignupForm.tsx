import { GeneralForm } from 'widgets';
import { GeneralInput, Alert } from 'shared';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockFetch } from 'shared/lib/mockFetch.ts';

const requiredFields = ['email', 'password', 'firstName', 'lastName'];

export const SignupForm = () => {
	const [loading, setLoading] = useState(false);
	const [serverError, setServerError] = useState<string | null>(null);
	const navigate = useNavigate();
	const onSubmitHandler = async (values: FormData) => {
		setLoading(true);
		setServerError(null);
		const payload = Object.fromEntries(values.entries());
		mockFetch(payload, Math.random() > 0.5)
			.then(() => {
				setServerError(null);
				setLoading(false);
				navigate('/login');
			})
			.catch((error) => {
				setServerError((error as Error).message);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	return (
		<GeneralForm requiredFields={requiredFields} className="auth-form" onSubmit={onSubmitHandler}>
			{({ errors, touched, hasRequiredErrors, handleBlur, handleChange, handleInvalid }) => (
				<>
					<fieldset className="auth-fieldset">
						<legend className="sr-only">Personal information</legend>
						<GeneralInput
							type="text"
							name="firstName"
							id="firstName"
							autoComplete="given-name"
							labelText="First name:"
							onBlurHandler={handleBlur}
							onChangeHandler={handleChange}
							onInvalidHandler={handleInvalid}
							touched={touched}
							errors={errors}
							disabled={loading}
							required
						/>
						<GeneralInput
							type="text"
							name="lastName"
							id="lastName"
							autoComplete="family-name"
							labelText="Last name:"
							onBlurHandler={handleBlur}
							onChangeHandler={handleChange}
							onInvalidHandler={handleInvalid}
							touched={touched}
							errors={errors}
							disabled={loading}
							required
						/>
					</fieldset>
					<GeneralInput
						type="email"
						name="email"
						id="email"
						autoComplete="username"
						labelText="E-mail:"
						onBlurHandler={handleBlur}
						onChangeHandler={handleChange}
						onInvalidHandler={handleInvalid}
						touched={touched}
						errors={errors}
						disabled={loading}
						required
					/>
					<GeneralInput
						type="password"
						name="password"
						id="password"
						autoComplete="current-password"
						labelText="Password:"
						onBlurHandler={handleBlur}
						onChangeHandler={handleChange}
						onInvalidHandler={handleInvalid}
						touched={touched}
						errors={errors}
						disabled={loading}
						required
					/>
					{serverError && <Alert title="Error" message="Something went wrong. Please try again." />}
					<button
						type="submit"
						className="button actions-button"
						disabled={loading || hasRequiredErrors}
					>
						{loading ? 'Loading...' : 'Sign up'}
					</button>
				</>
			)}
		</GeneralForm>
	);
};
