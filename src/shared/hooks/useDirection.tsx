import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useDirection() {
	const location = useLocation();
	const prev = useRef(location.pathname);

	useEffect(() => {
		if (prev.current === '/login' && location.pathname === '/signup') {
			document.documentElement.dataset.vtDirection = 'forwards';
		}
		if (prev.current === '/signup' && location.pathname === '/login') {
			document.documentElement.dataset.vtDirection = 'backwards';
		}
		prev.current = location.pathname;
	}, [location]);
}
