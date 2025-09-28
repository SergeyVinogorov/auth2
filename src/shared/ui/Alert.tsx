import { FC } from 'react';

interface AlertProps {
	type?: 'error' | 'success';
	title: string;
	message: string;
}

const icons: Record<string, string> = {
	error: '❌',
	success: '✅',
};

export const Alert: FC<AlertProps> = ({ message, type = 'error', title }) => {
	return (
		<div
			role="alert"
			aria-live={type === 'error' ? 'assertive' : 'polite'}
			className={`alert alert-${type}`}
		>
			<h4>
				{icons[type]} {title}
			</h4>
			<p>{message}</p>
		</div>
	);
};
