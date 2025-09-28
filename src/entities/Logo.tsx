import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Logo: FC = () => {
	const { pathname } = useLocation();
	const isLogin = pathname.startsWith('/signup');
	return (
		<Link to="/" className={'logo' + (isLogin ? ' logo-light' : ' logo-dark')}>
			BoardMe
		</Link>
	);
};
