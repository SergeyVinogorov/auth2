import { Link } from 'react-router-dom';
import { LoginForm } from './LoginForm.tsx';
import { ErrorBoundary, InfoPanel } from 'shared';

export const LoginPage = () => {
	return (
		<div className="layout-container">
			<div className="auth-panel">
				<div className="auth-container">
					<h2>Log in to your account</h2>
					<p>Log in to your account so you continue building and editing you onboarding flows</p>
					<ErrorBoundary>
						<LoginForm />
					</ErrorBoundary>
				</div>
			</div>
			<InfoPanel className="reversed-frame">
				<div>
					<h2>Don't have an account yet?</h2>
					<p>
						Let's get you all set up so you can start creating your first onboarding experience.
					</p>
					<Link viewTransition to="/signup" type="button" className="button">
						sign up
					</Link>
				</div>
			</InfoPanel>
		</div>
	);
};
