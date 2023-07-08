import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RecipesProvider } from './Context/RecipesContext';
import App from './App';
import Icon from './Pages/Icon';
import Login from './Pages/Login';
import Recipes from './Pages/Recipes';
import RecipesDetails from './Pages/RecipesDetails';
import RecipesInProgress from './Pages/RecipesInProgress';
import Profile from './Pages/Profile';
import DoneRecipes from './Pages/DoneRecipes';
import FavoriteRecipes from './Pages/FavoriteRecipes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Icon />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/foods',
        element: <Recipes />,
      },
      {
        path: '/foods/:id',
        element: <RecipesDetails />,
      },
      {
        path: '/foods/:id/in-progress',
        element: <RecipesInProgress />,
      },
      {
        path: '/drinks',
        element: <Recipes />,
      },
      {
        path: '/drinks/:id',
        element: <RecipesDetails />,
      },
      {
        path: '/drinks/:id/in-progress',
        element: <RecipesInProgress />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/done-recipes',
        element: <DoneRecipes />,
      },
      {
        path: '/favorite-recipes',
        element: <FavoriteRecipes />,
      },
    ],
  },
]);

ReactDOM.render(
  <RecipesProvider>
    <RouterProvider router={ router } />
  </RecipesProvider>,
  document.getElementById('root'),
);
