import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testa o component Header', () => {
  test('Se o header se comporta de maneira esperada ao ir para /foods', () => {
    render(
      <MemoryRouter initialEntries={ ['/foods'] }>
        <App />
      </MemoryRouter>,
    );

    const trayWithClocheAndHeart = screen.getByRole('img', {
      name: /bandeija de restaurante e coração/i,
    });
    const recipesAppLetter = screen.getByRole('img', { name: /escrito recipes app/i });
    const searchButton = screen.getByRole('img', { name: /icone de lupa/i });
    const profileButton = screen.getByRole('img', { name: /icone de perfil/i });
    const title = screen.getByRole('heading', { name: /foods/i });

    expect(trayWithClocheAndHeart).toBeInTheDocument();
    expect(recipesAppLetter).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(profileButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('Se o header se comporta de maneira esperada ao ir para /drinks', () => {
    render(
      <MemoryRouter initialEntries={ ['/drinks'] }>
        <App />
      </MemoryRouter>,
    );

    const trayWithClocheAndHeart = screen.getByRole('img', {
      name: /bandeija de restaurante e coração/i,
    });
    const recipesAppLetter = screen.getByRole('img', { name: /escrito recipes app/i });
    const searchButton = screen.getByRole('img', { name: /icone de lupa/i });
    const profileButton = screen.getByRole('img', { name: /icone de perfil/i });
    const title = screen.getByRole('heading', { name: /drinks/i });

    expect(trayWithClocheAndHeart).toBeInTheDocument();
    expect(recipesAppLetter).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(profileButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('Se o header se comporta de maneira esperada ao ir para /profile', () => {
    render(
      <MemoryRouter initialEntries={ ['/profile'] }>
        <App />
      </MemoryRouter>,
    );

    const trayWithClocheAndHeart = screen.getByRole('img', {
      name: /bandeija de restaurante e coração/i,
    });
    const recipesAppLetter = screen.getByRole('img', { name: /escrito recipes app/i });
    const searchButton = screen.queryByRole('img', { name: /icone de lupa/i });
    const profileButton = screen.getByRole('img', { name: /icone de perfil/i });
    const title = screen.getByRole('heading', { name: /profile/i });

    expect(trayWithClocheAndHeart).toBeInTheDocument();
    expect(recipesAppLetter).toBeInTheDocument();
    expect(searchButton).toBeNull();
    expect(profileButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('Se o header se comporta de maneira esperada ao ir para /done-recipes', () => {
    render(
      <MemoryRouter initialEntries={ ['/done-recipes'] }>
        <App />
      </MemoryRouter>,
    );

    const trayWithClocheAndHeart = screen.getByRole('img', {
      name: /bandeija de restaurante e coração/i,
    });
    const recipesAppLetter = screen.getByRole('img', { name: /escrito recipes app/i });
    const searchButton = screen.queryByRole('img', { name: /icone de lupa/i });
    const profileButton = screen.getByRole('img', { name: /icone de perfil/i });
    const title = screen.getByRole('heading', { name: /done recipes/i });

    expect(trayWithClocheAndHeart).toBeInTheDocument();
    expect(recipesAppLetter).toBeInTheDocument();
    expect(searchButton).toBeNull();
    expect(profileButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('Se o header se comporta de maneira esperada ao ir para /favorite-recipes', () => {
    render(
      <MemoryRouter initialEntries={ ['/favorite-recipes'] }>
        <App />
      </MemoryRouter>,
    );

    const trayWithClocheAndHeart = screen.getByRole('img', {
      name: /bandeija de restaurante e coração/i,
    });
    const recipesAppLetter = screen.getByRole('img', { name: /escrito recipes app/i });
    const searchButton = screen.queryByRole('img', { name: /icone de lupa/i });
    const profileButton = screen.getByRole('img', { name: /icone de perfil/i });
    const title = screen.getByRole('heading', { name: /favorite recipes/i });

    expect(trayWithClocheAndHeart).toBeInTheDocument();
    expect(recipesAppLetter).toBeInTheDocument();
    expect(searchButton).toBeNull();
    expect(profileButton).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test('Se ao clicar no botão de search o input aparece', () => {
    render(
      <MemoryRouter initialEntries={ ['/foods'] }>
        <App />
      </MemoryRouter>,
    );

    const searchButton = screen.getByRole('img', { name: /icone de lupa/i });
    userEvent.click(searchButton);

    const textInput = screen.getByRole('textbox');
    expect(textInput).toBeInTheDocument();

    userEvent.click(searchButton);
    expect(textInput).not.toBeInTheDocument();
  });

  test('Se ao clicar no botão de search o input aparece', () => {
    render(
      <MemoryRouter initialEntries={ ['/foods'] }>
        <App />
      </MemoryRouter>,
    );

    const profileButton = screen.getByRole('img', { name: /icone de perfil/i });
    userEvent.click(profileButton);

    const title = screen.getByRole('heading', { name: /profile/i });
    expect(title).toBeInTheDocument();
  });
});
