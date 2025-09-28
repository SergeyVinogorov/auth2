import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { LoginForm } from './LoginForm';
import * as api from 'shared/lib/mockFetch';

//Mock navigate
vi.mock('react-router-dom', async () => {
	const actual = await vi.importActual('react-router-dom');
	return {
		...actual,
		useNavigate: () => vi.fn(),
	};
});

//Mock fetch util
const mockFetchSpy = vi.spyOn(api, 'mockFetch');

describe('LoginForm', () => {
	it('renders form inputs and buttons', () => {
		render(
			<BrowserRouter>
				<LoginForm />
			</BrowserRouter>,
		);
		expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
	});

	it('shows error when fields are empty and form submitted', async () => {
		render(
			<BrowserRouter>
				<LoginForm />
			</BrowserRouter>,
		);
		fireEvent.click(screen.getByRole('button', { name: /login/i }));
		expect(await screen.findByText(/password is required/i)).toBeInTheDocument();
	});

	it('disables button while loading', async () => {
		render(
			<BrowserRouter>
				<LoginForm />
			</BrowserRouter>,
		);
		fireEvent.input(screen.getByLabelText(/e-mail/i), { target: { value: 'test@example.com' } });
		fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
		fireEvent.click(screen.getByRole('button', { name: /login/i }));
		expect(screen.getByRole('button', { name: /loading/i })).toBeDisabled();
	});

	it('shows server error when login fails', async () => {
		mockFetchSpy.mockImplementationOnce(() => Promise.reject(new Error('Invalid credentials')));
		render(
			<BrowserRouter>
				<LoginForm />
			</BrowserRouter>,
		);
		fireEvent.input(screen.getByLabelText(/e-mail/i), { target: { value: 'test@example.com' } });
		fireEvent.input(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
		fireEvent.click(screen.getByRole('button', { name: /login/i }));
		expect(await screen.findByRole('alert')).toHaveTextContent(/something went wrong/i);
	});
});
