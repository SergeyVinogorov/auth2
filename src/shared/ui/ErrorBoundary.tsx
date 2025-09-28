import { Component, ReactNode, ErrorInfo } from 'react';
import { useRouteError } from 'react-router-dom';
import { Alert } from './Alert';

export class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
	constructor(props: { children: ReactNode }) {
		super(props);
		this.state = { hasError: false };
	}
	static getDerivedStateFromError() {
		return { hasError: true };
	}
	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Error caught by boundary: ', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <Alert title="Error" message="Something went wrong" />;
		}
		return this.props.children;
	}
}

export const ErrorBoundaryRoute = () => {
	const error = useRouteError();
	console.error(error);
	return <Alert title="Error" message="Something went wrong" />;
};
