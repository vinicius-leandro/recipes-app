import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext([]);

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [hasFilter, setHasFilter] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const value = useMemo(
    () => ({
      recipes,
      filteredRecipes,
      hasFilter,
      buttonDisabled,
      setRecipes,
      setHasFilter,
      setFilteredRecipes,
      setButtonDisabled,
    }),
    [filteredRecipes, recipes, hasFilter, buttonDisabled],
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
