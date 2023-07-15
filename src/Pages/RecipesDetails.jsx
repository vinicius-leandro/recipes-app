import React, { useEffect, useState } from 'react';
import { useMatches } from 'react-router-dom';
import { getRecipeById } from '../Service/requests';
import ControlledCarousel from '../Components/ControlledCarousel';
import RecipesDetailsButton from '../Components/RecipesDetailsButton';
import RecipeIngredients from '../Components/RecipeIngredients';
import RecipeInstructionsAndVideo from '../Components/RecipeInstructionsAndVideo';
import RecipeHeader from '../Components/RecipeHeader';

export default function RecipesDetails() {
  const match = useMatches();
  const [recipe, setRecipe] = useState({});
  const [showVideo, setShowVideo] = useState(false);
  const mealsOrCocktails = match[1].pathname.includes('food') ? 'meals' : 'cocktails';

  useEffect(() => {
    const getRecipe = async () => {
      if (match[1].pathname.includes('foods')) {
        const [result] = await getRecipeById('meals', match[1].params.id);
        JSON.stringify(result.strYoutube);
        setRecipe(result);
        setShowVideo(true);
      } else {
        const [result] = await getRecipeById('drinks', match[1].params.id);
        setRecipe(result);
        setShowVideo(false);
      }
    };

    getRecipe();
  }, [match]);
  return (
    <section>
      <RecipeHeader recipe={ recipe } pathname={ match[1].pathname } />
      <RecipeIngredients recipe={ recipe } />
      <RecipeInstructionsAndVideo
        instructions={ recipe.strInstrucions }
        ytUrl={ recipe.strYoutube }
        showVideo={ showVideo }
      />
      <ControlledCarousel />
      <RecipesDetailsButton
        id={ match[1].params.id }
        mealsOrCocktails={ mealsOrCocktails }
      />
    </section>
  );
}
