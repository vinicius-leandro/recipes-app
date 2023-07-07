import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa o componente search bar', () => {
  test('Se pesquisa por ingrediente', () => {
    render(
      <MemoryRouter initialEntries={ ['/foods'] }>
        <App />
      </MemoryRouter>,
    );

    const searchBarButton = screen.getByRole('img', { name: /icone de lupa/i });
    userEvent.click(searchBarButton);

    const textbox = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search/i });
    const radioIngredient = screen.getByRole('radio', { name: /ingredient/i });

    userEvent.click(radioIngredient);
    userEvent.type(textbox, 'chicken');
    userEvent.click(searchButton);
  });

  test('Se pesquisa por nome', () => {
    render(
      <MemoryRouter initialEntries={ ['/foods'] }>
        <App />
      </MemoryRouter>,
    );

    const searchBarButton = screen.getByRole('img', { name: /icone de lupa/i });
    userEvent.click(searchBarButton);

    const textbox = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search/i });
    const radioName = screen.getByRole('radio', { name: /name/i });

    userEvent.click(radioName);
    userEvent.type(textbox, 'crispy');
    userEvent.click(searchButton);
  });

  test('Se pesquisa pela primeira letra', () => {
    render(
      <MemoryRouter initialEntries={ ['/foods'] }>
        <App />
      </MemoryRouter>,
    );

    const searchBarButton = screen.getByRole('img', { name: /icone de lupa/i });
    userEvent.click(searchBarButton);

    const textbox = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /search/i });
    const radioFirstLetter = screen.getByRole('radio', { name: /first letter/i });

    userEvent.click(radioFirstLetter);
    userEvent.type(textbox, 'a');
    userEvent.click(searchButton);
  });
});
