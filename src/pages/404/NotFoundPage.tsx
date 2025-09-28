import { EmptyState } from 'shared/ui/EmptyState.tsx';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
	return (
		<EmptyState
			title="404 - Page Not Found"
			description="Sorry, the page you are looking for does not exist or has been moved."
			action={
				<Link to="/" className="button actions-button">
					Go home
				</Link>
			}
		/>
	);
};
