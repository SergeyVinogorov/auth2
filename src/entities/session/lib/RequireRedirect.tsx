import { useAuth } from 'entities/session';
import { Navigate } from 'react-router-dom';

export const RequireRedirect = () => {
	const { isAuthenticated } = useAuth();
	return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />;
};
