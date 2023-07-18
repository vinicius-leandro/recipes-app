import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import ShareAndFavorite from './ShareAndFavorite';

export default function DoneAndFavoriteCards({ recipe, page }) {
  const { pathname } = useLocation();
  const [showFavoriteButton, setShowFavoriteButton] = useState(true);
  const {
    id, image, name, nationality, category, date, tags, type, alcoholicOrNot,
  } = recipe;
  const path = `/${type}s/${id}`;

  useEffect(() => {
    if (pathname.includes('done')) setShowFavoriteButton(false);
  }, [pathname, setShowFavoriteButton]);

  return (
    <section>
      <Link to={ path }>
        <figure>
          <img src={ image } alt="Foto da receita" />
        </figure>
      </Link>
      <section>
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
        <ShareAndFavorite
          showFavoriteButton={ showFavoriteButton }
          recipe={ recipe }
          pathname={ path }
        />
      </section>
      {
        page === 'done recipes' && (
          <section>
            {`Done in: ${date}`}
          </section>
        )
      }
      {
        type === 'food' && page === 'done recipes' && (
          <section>
            <p>{tags}</p>
          </section>
        )
      }
    </section>

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
