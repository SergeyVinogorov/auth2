import { Link } from 'react-router-dom';
import { GeneralForm } from './GeneralForm.tsx';
import { GeneralInput } from './GeneralInput.tsx';

export const LoginPage = () => {
	return (
		<div className="container">
			<div className="panel">
				<div className="container-auth">
					<h2>Log in to your account</h2>
					<p>Log in to your account so you continue building and editing you onboarding flows</p>
					<GeneralForm>
						{({ errors, touched, hasErrors, handleBlur, handleChange, handleInvalid }) => (
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
									required
								/>
								<button className="button" type="submit" disabled={hasErrors}>
									Sign up
								</button>
							</>
						)}
					</GeneralForm>
				</div>
			</div>
			<div className="info-panel panel reversed-frame transition-slide">
				<div className="container-info">
					<div>
						<h2>Don't have an account yet?</h2>
						<p>
							Let's get you all set up so you can start creating your first onboarding experience.
						</p>
						<Link viewTransition to="/signup" type="button" className="button">
							sign up
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
