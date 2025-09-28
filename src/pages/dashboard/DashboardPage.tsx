import { Alert } from 'shared/ui/Alert.tsx';
import { LogoutButton } from 'entities';

export const DashboardPage = () => {
	return (
		<section className="page-home">
			<h1>Home page</h1>
			<Alert title="Welcome" type="success" message="You are logged in!" />
			<LogoutButton />
		</section>
	);
};
