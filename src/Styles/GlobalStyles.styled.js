import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Epilogue', sans-serif;
  }
  input, textarea, button, select {
    font: inherit;
  } 
`;

export default GlobalStyle;
