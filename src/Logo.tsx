import { FC } from 'react';
import { useLocation } from 'react-router-dom';

export const Logo: FC = () => {
	const { pathname } = useLocation();
	const isLogin = pathname.startsWith('/signup');
	return <p className={'logo' + (isLogin ? ' logo-light' : ' logo-dark')}>{'BoardMe'}</p>;
};
