import React from 'react';
import PropTypes from 'prop-types';

export default function RecipeInstructionsAndVideo({ instructions, ytUrl }) {
  const INITIAL_CODE_VIDEO = 33;

  return (
    <>
      <section>
        <h2>Instructions</h2>
        <div>
          <p>{instructions}</p>
        </div>
      </section>
      <section>
        <h2>Video</h2>
        <div>
          <iframe
            width="560"
            height="315"
            src={
              `https://www.youtube-nocookie.com/embed/${JSON.stringify(ytUrl).slice(INITIAL_CODE_VIDEO, ytUrl.lastIndexOf(' '))}`
            }
            title="YouTube video player"
            allowFullScreen
          />
        </div>

      </section>
    </>
  );
}

RecipeInstructionsAndVideo.propTypes = {
  instructions: PropTypes.string,
  ytUrl: PropTypes.string,
}.isRequired;
