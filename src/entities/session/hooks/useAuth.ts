export const useAuth = () => {
	const isAuthenticated = Boolean(localStorage.getItem('token'));
	const setToken = (token: string) => {
		localStorage.setItem('token', token);
	};
	const logout = () => {
		localStorage.removeItem('token');
	};
	return { isAuthenticated, setToken, logout };
};
