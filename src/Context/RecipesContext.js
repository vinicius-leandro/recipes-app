import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext([]);

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [hasFilter, setHasFilter] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const value = useMemo(
    () => ({
      recipes,
      filteredRecipes,
      hasFilter,
      isFavorite,
      buttonDisabled,
      setRecipes,
      setHasFilter,
      setIsFavorite,
      setFilteredRecipes,
      setButtonDisabled,
    }),
    [filteredRecipes, recipes, hasFilter, buttonDisabled, isFavorite],
  );

  return (
    <RecipesContext.Provider value={ value }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
