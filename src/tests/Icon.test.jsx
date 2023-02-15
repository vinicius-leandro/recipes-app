import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Testa a pagina de Icon', () => {
  test('Se o icone do app aparece e sai depois de 3 segundos', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    const THREE_SECONDS = 3000;
    const iconApp = screen.getByRole('img', { name: /icone do app/i });

    expect(iconApp).toBeInTheDocument();
    await waitFor(
      () => expect(iconApp).not.toBeInTheDocument(), { timeout: THREE_SECONDS },
    );
  });
});
