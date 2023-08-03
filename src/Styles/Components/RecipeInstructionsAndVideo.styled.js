import styled from 'styled-components';

const InstructionsContainer = styled.section`
  margin: 2.5rem 0.5rem;
  h2 {
    font-weight: 700;
    font-size: 25px;
    margin-left: 0.7rem;
  }

  div {
    margin-top: 0.5rem;
    border: 1px solid #b1b1b1;
    border-radius: 7px;
    padding: 1rem 0.7rem 0.5rem 0.7rem;

    p {
      margin-bottom: 0.5rem;
    }
  }
`;

const VideoContainer = styled.section`
  margin: 2.5rem 0.5rem;
  h2 {
    font-weight: 700;
    font-size: 25px;
    margin-left: 0.7rem;
  }

  div {
    margin-top: 0.5rem;
    iframe {
      width: 100%;
      height: 20em;
    }
  }
`;

export {
  VideoContainer,
  InstructionsContainer,
};
