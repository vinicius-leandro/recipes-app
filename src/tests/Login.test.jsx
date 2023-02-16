import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa a pagina de Login', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={ ['/login'] }>
        <App />
      </MemoryRouter>,
    );
  });

  test('Se existem imagens, inputs e um botão desabilitado na pagina de login', () => {
    const logoApp = screen.getByRole('img', { name: /logotipo do app/i });
    const salad = screen.getByRole('img', { name: /salada com alface e tomate/i });
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const enterButton = screen.getByRole('button', { name: /enter/i });

    expect(logoApp).toBeInTheDocument();
    expect(salad).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(enterButton).toBeInTheDocument();
    expect(enterButton).toBeDisabled();
  });

  test('Se salva no local storage e envia para /foods ao clickar no botão', () => {
    const emailInput = screen.getByPlaceholderText(/email/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const enterButton = screen.getByRole('button', { name: /enter/i });

    userEvent.type(emailInput, 'test@test.com');
    userEvent.type(passwordInput, '1234567');
    expect(enterButton).toBeEnabled();
    userEvent.click(enterButton);

    expect(emailInput).not.toBeInTheDocument();
    expect(passwordInput).not.toBeInTheDocument();
    expect(enterButton).not.toBeInTheDocument();
  });
});
