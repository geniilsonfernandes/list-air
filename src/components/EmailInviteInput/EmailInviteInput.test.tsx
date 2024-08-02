import { notifications } from '@mantine/notifications';
import { render, screen } from '@test-utils';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { EmailInviteInput } from './EmailInviteInput';

// Mocking the notifications
vi.mock('@mantine/notifications', () => ({
  notifications: {
    show: vi.fn(),
  },
}));

describe('EmailInviteInput', () => {
  it('renders the component', () => {
    render(<EmailInviteInput />);
    expect(screen.getByText('Enviar convite por email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('email')).toBeInTheDocument();
  });

  it('validates the email input', async () => {
    render(<EmailInviteInput />);
    const input = screen.getByPlaceholderText('email');
    const button = screen.getByRole('button');

    await userEvent.type(input, 'invalid-email');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Email inválido')).toBeInTheDocument();
    });
  });

  it('submits the form with a valid email and shows a notification', async () => {
    render(<EmailInviteInput />);
    const input = screen.getByPlaceholderText('email');
    const button = screen.getByRole('button');

    await userEvent.type(input, 'gerHk@example.com');
    await userEvent.click(button);

    await waitFor(() => {
      expect(notifications.show).toHaveBeenCalledWith({
        title: 'Convite enviado',
        message: 'Um convite foi enviado para o email informado',
      });
    });
  });
});
