import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { RecipesContext } from '../Context/RecipesContext';
import { getFilteredRecipes } from '../Service/requests';
import AllFoodIcon from '../images/AllFoodIcon.svg';
import beefIcon from '../images/beefIcon.svg';
import goatIcon from '../images/goatIcon.svg';
import chickenIcon from '../images/chickenIcon.svg';
import breakfastIcon from '../images/breakfastIcon.svg';
import dessertIcon from '../images/dessertIcon.svg';
import AllDrinkIcon from '../images/AllDinkIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import cocktailIcon from '../images/cocktailIcon.svg';
import shakeIcon from '../images/shakeIcon.svg';
import otherIcon from '../images/otherIcon.svg';
import cocoaIcon from '../images/cocoaIcon.svg';

export default function RecipesFilters() {
  const { setFilteredRecipes, setHasFilter } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const [lastFilter, setLastFilter] = useState('default');
  const [informations, setInformations] = useState({
    firstButton: { img: AllFoodIcon, alt: 'Imagem de prato com garfo e faca' },
    secondButton: { name: 'Beef', img: beefIcon, alt: 'Imagem de vaca' },
    thirdButton: { name: 'Goat', img: goatIcon, alt: 'Imagem de cabra' },
    fourthButton: { name: 'Chicken', img: chickenIcon, alt: 'Imagem de galinha' },
    fifthButton:
    { name: 'Breakfast', img: breakfastIcon, alt: 'Imagem de pão com ovos' },
    sixthButton:
    { name: 'Dessert', img: dessertIcon, alt: 'Imagem de fatia de bolo' },
  });

  const handleRequest = async (category) => {
    if (pathname.includes('food')) {
      if (category !== lastFilter) {
        const filteredRecipes = await getFilteredRecipes('meals', category);
        setFilteredRecipes(filteredRecipes);
        setHasFilter(true);
        setLastFilter(category);
      } else {
        setHasFilter(false);
        setLastFilter('default');
      }
    } else if (pathname.includes('drink')) {
      if (category !== lastFilter) {
        const filteredRecipes = await getFilteredRecipes('drinks', category);
        setFilteredRecipes(filteredRecipes);
        setHasFilter(true);
        setLastFilter(category);
      } else {
        setHasFilter(false);
        setLastFilter('default');
      }
    }
  };

  useEffect(() => {
    if (pathname.includes('drink')) {
      setInformations({
        firstButton: { img: AllDrinkIcon, alt: 'Imagem  de copo de drink' },
        secondButton:
          { name: 'Ordinary_Drink', img: drinkIcon, alt: 'Imagem de taça' },
        thirdButton:
          { name: 'Cocktail', img: cocktailIcon, alt: 'Imagem como com limonada' },
        fourthButton:
          { name: 'Shake', img: shakeIcon, alt: 'Imagem de copo com tampa e canudo' },
        fifthButton:
          { name: 'Other_/_Unknown', img: otherIcon, alt: 'Imagem de caneca de cerveja' },
        sixthButton: { name: 'Cocoa', img: cocoaIcon, alt: 'Imagem de xicará de café' },
      });
    }
    setHasFilter(false);
  }, [pathname, setHasFilter]);
  return (
    <section>
      <section>
        <button type="button" onClick={ () => setHasFilter(false) }>
          <img
            src={ informations.firstButton.img }
            alt={ informations.firstButton.alt }
          />
        </button>
      </section>
      <section>
        <button
          type="button"
          onClick={
            () => handleRequest(informations.secondButton.name)
          }
        >
          <img
            src={ informations.secondButton.img }
            alt={ informations.secondButton.alt }
          />
        </button>
      </section>
      <section>
        <button
          type="button"
          onClick={
            () => handleRequest(informations.thirdButton.name)
          }
        >
          <img
            src={ informations.thirdButton.img }
            alt={ informations.thirdButton.alt }
          />
        </button>
      </section>
      <section>
        <button
          type="button"
          onClick={
            () => handleRequest(informations.fourthButton.name)
          }
        >
          <img
            src={ informations.fourthButton.img }
            alt={ informations.fourthButton.alt }
          />
        </button>
      </section>
      <section>
        <button
          type="button"
          onClick={
            () => handleRequest(informations.fifthButton.name)
          }
        >
          <img
            src={ informations.fifthButton.img }
            alt={ informations.fifthButton.alt }
          />
        </button>
      </section>
      <section>
        <button
          type="button"
          onClick={
            () => handleRequest(informations.sixthButton.name)
          }
        >
          <img
            src={ informations.sixthButton.img }
            alt={ informations.sixthButton.alt }
          />
        </button>
      </section>
    </section>
  );
}
