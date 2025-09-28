import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'entities/session';

export const ProtectedRoute = () => {
	const { isAuthenticated } = useAuth();
	return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
