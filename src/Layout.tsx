import { Logo } from './Logo.tsx';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useDirection } from './shared/useDirection.tsx';

export const Layout: FC = () => {
	useDirection();
	return (
		<div className="page-layout">
			<Logo />
			<Outlet />
		</div>
	);
};
