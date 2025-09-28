import { GeneralForm } from 'widgets';
import { GeneralInput, mockFetch, Alert } from 'shared';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'entities/session';

const requiredFields = ['email', 'password'];

export const LoginForm = () => {
	const [loading, setLoading] = useState(false);
	const [serverError, setServerError] = useState<string | null>(null);
	const navigate = useNavigate();
	const { setToken } = useAuth();
	const onSubmitHandler = async (values: FormData) => {
		setLoading(true);
		setServerError(null);
		const payload = Object.fromEntries(values.entries());
		mockFetch(payload, Math.random() > 0.5)
			.then(() => {
				setServerError(null);
				setLoading(false);
				setToken('token');
				navigate('/dashboard');
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
					{serverError && (
						<Alert title="Warning" message="Something went wrong. Please try again." />
					)}
					<button
						className="button actions-button"
						type="submit"
						disabled={loading || hasRequiredErrors}
					>
						{loading ? 'Loading...' : 'Login'}
					</button>
				</>
			)}
		</GeneralForm>
	);
};
