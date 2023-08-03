import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, useLocation } from 'react-router-dom';
import { getGenericRecipes } from '../Service/requests';
import {
  ControledCarouselContainer, CarouselCard,
} from '../Styles/Components/ControledCarousel.styled';

export default function ControlledCarousel() {
  const [recommendations, setRecommendations] = useState([]);
  const { pathname } = useLocation();
  const LIMIT = 6;
  const recipeImage = pathname.includes('food') ? 'strDrinkThumb' : 'strMealThumb';
  const recipeName = pathname.includes('food') ? 'strDrink' : 'strMeal';
  const id = pathname.includes('food') ? 'idDrink' : 'idMeal';
  const page = pathname.includes('food') ? 'drinks' : 'foods';
  useEffect(() => {
    const foodOrDrink = pathname.includes('food') ? 'drinks' : 'meals';
    const getRecipe = async () => {
      const result = await getGenericRecipes(foodOrDrink);
      setRecommendations(result);
    };

    getRecipe();
  }, [pathname]);

  const responsive = {
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <ControledCarouselContainer>
      <h2>Recommended</h2>
      <section>
        <Carousel
          draggable={ false }
          responsive={ responsive }
          ssr // means to render carousel on server-side.
          infinite
          autoPlay={ false }
          containerClass="carousel-container"
          removeArrowOnDeviceType={ ['tablet', 'mobile'] }
          deviceType="mobile"
          itemClass="carousel-item-padding-40-px"
        >
          {
            recommendations.slice(0, LIMIT).map((recipe, index) => (
              <Link to={ `/${page}/${recipe[id]}` } key={ index }>
                <CarouselCard>
                  <figure>
                    <img src={ recipe[recipeImage] } alt={ recipe[recipeName] } />
                  </figure>
                  <h3>{recipe[recipeName]}</h3>
                </CarouselCard>
              </Link>
            ))
          }
        </Carousel>
      </section>
    </ControledCarouselContainer>
  );
}
