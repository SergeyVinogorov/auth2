import { FC, ReactNode } from 'react';

interface Props {
	children: ReactNode;
	className?: string;
}
export const InfoPanel: FC<Props> = ({ children, className }) => {
	return (
		<div className={'auth-panel info-panel slide-transition ' + className}>
			<div className="info-container">{children}</div>
		</div>
	);
};
