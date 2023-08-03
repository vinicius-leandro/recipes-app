import React, { useEffect, useState } from 'react';
import { useMatches, useNavigate } from 'react-router-dom';
import { getRecipeById } from '../Service/requests';
import ControlledCarousel from '../Components/ControlledCarousel';
import RecipesDetailsButton from '../Components/RecipesDetailsButton';
import RecipeIngredients from '../Components/RecipeIngredients';
import RecipeInstructionsAndVideo from '../Components/RecipeInstructionsAndVideo';
import RecipeHeader from '../Components/RecipeHeader';
import { checkAuthentication } from '../Service/utils';

export default function RecipesDetails() {
  const match = useMatches();
  const [recipe, setRecipe] = useState({});
  const [showYt, setShowYt] = useState(false);
  const mealsOrCocktails = match[1].pathname.includes('food') ? 'meals' : 'cocktails';
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthentication(navigate);
  }, [navigate]);

  useEffect(() => {
    const getRecipe = async () => {
      if (match[1].pathname.includes('foods')) {
        const [result] = await getRecipeById('meals', match[1].params.id);
        JSON.stringify(result.strYoutube);
        setRecipe(result);
        setShowYt(true);
      } else {
        const [result] = await getRecipeById('drinks', match[1].params.id);
        setRecipe(result);
        setShowYt(false);
      }
    };

    getRecipe();
  }, [match]);
  return (
    <section>
      <RecipeHeader recipe={ recipe } pathname={ match[1].pathname } />
      <RecipeIngredients recipe={ recipe } pathname={ match[1].pathname } />
      <RecipeInstructionsAndVideo
        instructions={ recipe.strInstructions }
        ytUrl={ recipe.strYoutube }
        showYt={ showYt }
      />
      <ControlledCarousel />
      <RecipesDetailsButton
        id={ match[1].params.id }
        mealsOrCocktails={ mealsOrCocktails }
      />
    </section>
  );
}
