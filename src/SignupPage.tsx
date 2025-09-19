import { Link } from 'react-router-dom';
import { GeneralInput } from './GeneralInput';
import { GeneralForm } from './GeneralForm';

export const SignupPage = () => {
	return (
		<div className="container">
			<div className="info-panel panel frame transition-slide">
				<div className="container-info">
					<div>
						<h2>Already signed up?</h2>
						<p>
							Let's get you all set up so you can start creating your first onboarding experience.
						</p>
						<Link viewTransition className="button" type="button" to="/login">
							login in
						</Link>
					</div>
				</div>
			</div>
			<div className="panel">
				<div className="container-auth">
					<h2>Sign up for an account</h2>
					<p>Let's get you all set up so you can start creating your first onboarding experience</p>
					<GeneralForm>
						{({ errors, touched, hasErrors, handleBlur, handleChange, handleInvalid }) => (
							<>
								<fieldset>
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
								<button type="submit" className="button" disabled={hasErrors}>
									Sign up
								</button>
							</>
						)}
					</GeneralForm>
				</div>
			</div>
		</div>
	);
};
