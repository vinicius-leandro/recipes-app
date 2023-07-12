import React, { useEffect, useState } from 'react';
import { useMatches } from 'react-router-dom';
import { getRecipeById } from '../Service/requests';

export default function RecipesDetails() {
  const match = useMatches();
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const image = match[1].pathname.includes('food') ? 'strMealThumb' : 'strDrinkThumb';
  const name = match[1].pathname.includes('food') ? 'strMeal' : 'strDrink';
  const INITIAL_CODE_VIDEO = 33;
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
        setShowVideo(true);
      }
    };

    getRecipe();
  }, [match]);

  useEffect(() => {
    const getIngredients = (obj) => {
      const ingredientArray = [];
      const MAX_INGREDIENTS = 15;
      for (let index = 1; index <= MAX_INGREDIENTS; index += 1) {
        if (obj[`strIngredient${index}`] !== ''
        && obj[`strIngredient${index}`] !== undefined) {
          ingredientArray.push(
            `${obj[`strIngredient${index}`]} - ${obj[`strMeasure${index}`]}`,
          );
        }
      }

      setIngredients(ingredientArray);
    };

    getIngredients(recipe);
  }, [recipe]);
  return (
    <section>
      <h1>{recipe[name]}</h1>
      <p>{recipe.strCategory}</p>
      <figure>
        <img src={ recipe[image] } alt="" />
      </figure>
      <section>
        <h2>Ingredients</h2>
        <div>
          <ul>
            {
              ingredients.map((ingredient) => (
                <li key={ ingredient }>{ingredient}</li>
              ))
            }
          </ul>
        </div>
      </section>
      <section>
        <h2>Instructions</h2>
        <div>
          <p>{recipe.strInstructions}</p>
        </div>
      </section>
      <section>
        <h2>Video</h2>
        <div>
          {
            showVideo && (
              <iframe
                width="560"
                height="315"
                src={
                  `https://www.youtube-nocookie.com/embed/${JSON.stringify(recipe.strYoutube).slice(INITIAL_CODE_VIDEO, recipe.strYoutube.lastIndexOf(' '))}`
                }
                title="YouTube video player"
                allowFullScreen
              />
            )
          }
        </div>
      </section>
    </section>
  );
}
