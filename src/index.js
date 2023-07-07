import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { RecipesProvider } from './Context/RecipesContext';
import App from './App';

ReactDOM.render(
  <RecipesProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecipesProvider>,
  document.getElementById('root'),
);
