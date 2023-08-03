import React from 'react';
import PropTypes from 'prop-types';
import {
  InstructionsContainer, VideoContainer,
} from '../Styles/Components/RecipeInstructionsAndVideo.styled';

export default function RecipeInstructionsAndVideo({ instructions, ytUrl = '', showYt }) {
  const INITIAL_CODE_VIDEO = 33;
  return (
    <>
      <InstructionsContainer>
        <h2>Instructions</h2>
        <div>
          <p>{instructions}</p>
        </div>
      </InstructionsContainer>
      {
        showYt && (
          <VideoContainer>
            <h2>Video</h2>
            <div>
              <iframe
                src={
                  `https://www.youtube-nocookie.com/embed/${JSON.stringify(ytUrl).slice(INITIAL_CODE_VIDEO, ytUrl.lastIndexOf(' '))}`
                }
                title="YouTube video player"
                allowFullScreen
              />
            </div>

          </VideoContainer>
        )
      }
    </>
  );
}

RecipeInstructionsAndVideo.propTypes = {
  instructions: PropTypes.string,
  ytUrl: PropTypes.string,
  showYt: PropTypes.bool,
}.isRequired;
