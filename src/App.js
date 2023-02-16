import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Icon from './Pages/Icon';
import Login from './Pages/Login';
import Recipes from './Pages/Recipes';
import RecipesDetails from './Pages/RecipesDetails';
import RecipesInProgress from './Pages/RecipesInProgress';
import Profile from './Pages/Profile';
import DoneRecipes from './Pages/DoneRecipes';
import FavoriteRecipes from './Pages/FavoriteRecipes';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Icon /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/foods" element={ <Recipes /> } />
        <Route path="/foods/:id-da-receita" element={ <RecipesDetails /> } />
        <Route
          path="/foods/:id-da-receita/in-progress"
          element={ <RecipesInProgress /> }
        />
        <Route path="/drinks" element={ <Recipes /> } />
        <Route path="/drinks/:id-da-receita" element={ <RecipesDetails /> } />
        <Route
          path="/drinks/:id-da-receita/in-progress"
          element={ <RecipesInProgress /> }
        />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/done-recipes" element={ <DoneRecipes /> } />
        <Route path="/favorite-recipes" element={ <FavoriteRecipes /> } />
      </Routes>
    </main>
  );
}

export default App;
