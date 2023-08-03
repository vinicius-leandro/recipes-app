import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { RecipesContext } from '../Context/RecipesContext';
import {
  getRecipesByFirstLetter,
  getRecipesByIngredients,
  getRecipesByName,
} from '../Service/requests';

import {
  FormContainer, InputText, InputRadioContainer, ButtonContainer,
} from '../Styles/Components/SearchBar.styled';

export default function SearchBar() {
  const navigate = useNavigate();
  const { setRecipes } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const [filterSearch, setFilterSearch] = useState('');
  const [radioInput, setRadioInput] = useState('ingredient');
  const MAX_LENGTH_DEFAULT = 524288;
  const [maxLength, setMaxLength] = useState(MAX_LENGTH_DEFAULT);

  const handleOnlyOneResult = (result, url) => {
    if (result.length === 1 && url === 'meals') {
      const [meal] = result;
      navigate(`/foods/${meal.idMeal}`);
    } else if (result.length === 1 && url === 'drinks') {
      const [drink] = result;
      navigate(`/drinks/${drink.idDrink}`);
    }
  };

  const handleRequest = async () => {
    const apiUrl = pathname.includes('food') ? 'meals' : 'drinks';

    const filters = {
      ingredient: (choice, ingredient) => getRecipesByIngredients(choice, ingredient),
      name: (choice, name) => getRecipesByName(choice, name),
      firstLetter: (choice, firstLetter) => getRecipesByFirstLetter(choice, firstLetter),
    };

    const result = await filters[radioInput](apiUrl, filterSearch);
    if (result[apiUrl] !== null || result.length > 0) {
      handleOnlyOneResult(result[apiUrl], apiUrl);
      setRecipes(result[apiUrl]);
    } else {
      setRecipes([]);
    }
  };

  const handleRadioClick = (value) => {
    setRadioInput(value);
    setFilterSearch('');

    if (value === 'firstLetter') {
      setMaxLength(1);
    } else {
      setMaxLength(MAX_LENGTH_DEFAULT);
    }
  };

  return (
    <FormContainer>
      <section>
        <InputText
          type="text"
          placeholder="Search"
          data-testid="search-input"
          maxLength={ maxLength }
          value={ filterSearch }
          onChange={ ({ target: { value } }) => setFilterSearch(value) }
        />
      </section>
      <InputRadioContainer>
        <label htmlFor="ingredientRadioInput">
          <input
            type="radio"
            name="searchFilter"
            id="ingredientRadioInput"
            value="ingredient"
            data-testid="ingredient-search-radio"
            defaultChecked
            onClick={ ({ target: { value } }) => handleRadioClick(value) }
          />
          Ingredient
        </label>
        <label htmlFor="nameRadioInput">
          <input
            type="radio"
            name="searchFilter"
            id="nameRadioInput"
            value="name"
            data-testid="name-search-radio"
            onClick={ ({ target: { value } }) => handleRadioClick(value) }
          />
          Name
        </label>
        <label htmlFor="firstLetterRadioInput">
          <input
            type="radio"
            name="searchFilter"
            id="firstLetterRadioInput"
            value="firstLetter"
            data-testid="first-letter-search-radio"
            onClick={ ({ target: { value } }) => handleRadioClick(value) }
          />
          First Letter
        </label>
      </InputRadioContainer>
      <ButtonContainer>
        <button type="button" data-testid="exec-search-btn" onClick={ handleRequest }>
          SEARCH
        </button>
      </ButtonContainer>
    </FormContainer>
  );
}
