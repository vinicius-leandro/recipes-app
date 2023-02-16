import React from 'react';
import Header from '../Components/Header';
import { RecipesProvider } from '../Context/RecipesContext';

export default function Recipes() {
  return (
    <div>
      <RecipesProvider>
        <Header />
      </RecipesProvider>
    </div>
  );
}
