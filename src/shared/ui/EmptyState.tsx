import { FC, ReactNode } from 'react';

interface Props {
	title: string;
	description?: string;
	action?: ReactNode;
}
export const EmptyState: FC<Props> = ({ title, description, action }) => {
	return (
		<div className="empty-state">
			<h1 className="empty-title">{title}</h1>
			{description && <p className="empty-description">{description}</p>}
			{action}
		</div>
	);
};
