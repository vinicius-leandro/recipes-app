import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext([]);

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [hasFilter, setHasFilter] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [changing, setChanging] = useState([]);
  const value = useMemo(
    () => ({
      recipes,
      filteredRecipes,
      hasFilter,
      buttonDisabled,
      changing,
      setRecipes,
      setHasFilter,
      setFilteredRecipes,
      setButtonDisabled,
      setChanging,
    }),
    [filteredRecipes, recipes, hasFilter, buttonDisabled, changing],
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
