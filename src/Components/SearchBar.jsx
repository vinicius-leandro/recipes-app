import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  getRecipesByFirstLetter,
  getRecipesByIngredients,
  getRecipesByName,
} from '../Service/requests';

export default function SearchBar() {
  const { pathname } = useLocation();
  const [filterSearch, setFilterSearch] = useState('');
  const [radioInput, setRadioInput] = useState();

  const handleRequest = async () => {
    const apiUrl = pathname.includes('food') ? 'food' : 'drink';

    const filters = {
      ingredient: (choice, ingredient) => getRecipesByIngredients(choice, ingredient),
      name: (choice, name) => getRecipesByName(choice, name),
      firstLetter: (choice, firstLetter) => getRecipesByFirstLetter(choice, firstLetter),
    };

    if (radioInput === 'firstLetter' && filterSearch.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
    }

    const result = await filters[radioInput](apiUrl, filterSearch);
    console.log(result);
  };

  return (
    <section>
      <form>
        <section>
          <input
            type="text"
            data-testid="search-input"
            onChange={ ({ target: { value } }) => setFilterSearch(value) }
          />
        </section>
        <section>
          <label htmlFor="ingredientRadioInput">
            <input
              type="radio"
              name="searchFilter"
              id="ingredientRadioInput"
              value="ingredient"
              data-testid="ingredient-search-radio"
              onClick={ ({ target: { value } }) => setRadioInput(value) }
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
              onClick={ ({ target: { value } }) => setRadioInput(value) }
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
              onClick={ ({ target: { value } }) => setRadioInput(value) }
            />
            First Letter
          </label>
        </section>
        <section>
          <button type="button" data-testid="exec-search-btn" onClick={ handleRequest }>
            SEARCH
          </button>
        </section>
      </form>
    </section>
  );
}
