import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import ShareAndFavorite from './ShareAndFavorite';
import {
  DoneAndFavoriteCard, CardInfoContainer, ShareButtonContainer,
} from '../Styles/Components/DoneAndFavoriteCard.styled';

export default function DoneAndFavoriteCards({ recipe, page }) {
  const { pathname } = useLocation();
  const [showFavoriteButton, setShowFavoriteButton] = useState(true);
  const [isFavoritePage, setIsFavoritePage] = useState(true);
  const {
    id, image, name, nationality, category, date, tags, type, alcoholicOrNot,
  } = recipe;
  const path = `/${type}s/${id}`;

  useEffect(() => {
    if (pathname.includes('done')) {
      setShowFavoriteButton(false);
      setIsFavoritePage(false);
    }
  }, [pathname, setShowFavoriteButton]);

  return (
    <DoneAndFavoriteCard $isFavorite={ isFavoritePage }>
      <Link to={ path }>
        <figure>
          <img src={ image } alt="Foto da receita" />
        </figure>
      </Link>
      <CardInfoContainer $isFavorite={ isFavoritePage }>
        <div>
          <Link to={ path }>
            <h2>{name}</h2>
          </Link>
          {
            type === 'food' ? (
              <p>{`${nationality} • ${category}`}</p>
            ) : (
              <p>{alcoholicOrNot}</p>
            )
          }
        </div>
        {
          page === 'done recipes' && (
            <section>
              <p>{`Done in: ${date}`}</p>
            </section>
          )
        }
        <section>
          {
            tags.split(', ').map((tag) => type === 'food'
            && page === 'done recipes' && tags !== null && (
              <span key={ tag }>{tag}</span>
            ))
          }
        </section>
      </CardInfoContainer>
      <ShareButtonContainer $isFavorite={ isFavoritePage }>
        <ShareAndFavorite
          showFavoriteButton={ showFavoriteButton }
          recipe={ recipe }
          pathname={ path }
          url={ pathname }
        />
      </ShareButtonContainer>
    </DoneAndFavoriteCard>
  );
}

DoneAndFavoriteCards.propTypes = {
  page: PropTypes.string,
  pathname: PropTypes.string,
  recipe: PropTypes.shape({
    id: PropTypes.number,
    data: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    nationality: PropTypes.string,
  }),
}.isRequired;
