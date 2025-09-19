import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { LoginPage } from './LoginPage.tsx';
import { SignupPage } from './SignupPage.tsx';
import { Layout } from './Layout.tsx';
import { StrictMode } from 'react';
import './index.css';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Navigate to="/login" replace /> },
			{ path: 'login', element: <LoginPage /> },
			{ path: 'signup', element: <SignupPage /> },
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
