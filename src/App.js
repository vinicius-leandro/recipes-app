import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/GlobalStyles.styled';
import colors from './Styles/colors';

function App() {
  return (
    <ThemeProvider theme={ colors }>
      <main>
        <Outlet />
        <GlobalStyle />
      </main>
    </ThemeProvider>
  );
}

export default App;
