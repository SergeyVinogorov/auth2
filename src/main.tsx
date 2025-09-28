import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import { Layout, ProtectedRoute, RequireRedirect } from 'entities';
import { DashboardPage, LoginPage, NotFoundPage, SignupPage } from 'pages';
import { ErrorBoundaryRoute } from 'shared';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorBoundaryRoute />,
		children: [
			{ index: true, element: <RequireRedirect /> },
			{ path: 'login', element: <LoginPage /> },
			{ path: 'signup', element: <SignupPage /> },
			{
				element: <ProtectedRoute />,
				children: [{ path: 'dashboard', element: <DashboardPage /> }],
			},
			{
				path: '*',
				element: <NotFoundPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
