import React, { useEffect, useState } from 'react';
import { useMatches } from 'react-router-dom';
import { getRecipeById } from '../Service/requests';

export default function RecipesDetails() {
  const match = useMatches();
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    const getRecipe = async () => {
      if (match[1].pathname.includes('foods')) {
        const result = await getRecipeById('meals', match[1].params.id);
        setRecipe(result);
      } else {
        const result = await getRecipeById('drinks', match[1].params.id);
        setRecipe(result);
      }
    };

    getRecipe();
  }, [match]);
  console.log(recipe);
  return (
    <div>RecipesDetails</div>
  );
}
