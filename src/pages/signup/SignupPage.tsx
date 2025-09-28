import { Link } from 'react-router-dom';
import { SignupForm } from './SignupForm.tsx';
import { ErrorBoundary, InfoPanel } from 'shared';

export const SignupPage = () => {
	return (
		<div className="layout-container">
			<InfoPanel className="frame">
				<div>
					<h2>Already signed up?</h2>
					<p>
						Let's get you all set up so you can start creating your first onboarding experience.
					</p>
					<Link viewTransition className="button" type="button" to="/login">
						login in
					</Link>
				</div>
			</InfoPanel>
			<div className="auth-panel">
				<div className="auth-container">
					<h2>Sign up for an account</h2>
					<p>Let's get you all set up so you can start creating your first onboarding experience</p>
					<ErrorBoundary>
						<SignupForm />
					</ErrorBoundary>
				</div>
			</div>
		</div>
	);
};
