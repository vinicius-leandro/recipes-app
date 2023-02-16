import React, { useState } from 'react';

export default function SearchBar() {
  const [radioInput, setRadioInput] = useState();
  console.log(radioInput);

  const handleRadioInpt = (nameInput) => {
    setRadioInput(nameInput);
  };
  return (
    <section>
      <form>
        <section>
          <input type="text" data-testid="search-input" />
        </section>
        <section>
          <label htmlFor="ingredientRadioInput">
            <input
              type="radio"
              name="searchFilter"
              id="ingredientRadioInput"
              value="ingredient"
              data-testid="ingredient-search-radio"
              onClick={ ({ target: { value } }) => handleRadioInpt(value) }
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
              onClick={ ({ target: { value } }) => handleRadioInpt(value) }
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
              onClick={ ({ target: { value } }) => handleRadioInpt(value) }
            />
            First Letter
          </label>
        </section>
        <section>
          <button type="button" data-testid="exec-search-btn">
            SEARCH
          </button>
        </section>
      </form>
    </section>
  );
}
