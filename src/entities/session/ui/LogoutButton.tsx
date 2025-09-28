import { useAuth } from 'entities/session';
import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();
	const logoutHandler = () => {
		logout();
		navigate('/login', { replace: true });
	};
	return (
		<button className="button actions-button" onClick={logoutHandler}>
			Logout
		</button>
	);
};
