import styled from 'styled-components';

const ControledCarouselContainer = styled.section`
  margin: 2.5rem 0.5rem;

  h2 {
    font-weight: 700;
    font-size: 25px;
    margin-left: 1.2rem;
  }

  section {
    margin-top: 0.5rem;
  }
`;

const CarouselCard = styled.div`
  border: 1px solid #B1B1B1;
  border-top: none;
  border-radius: 6px;
  width: 99%;

  img {
    width: 100%;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }

  h3 {
    padding: 0.6rem;
    color: black;
    font-weight: 400;
    font-size: 17px;
  }
`;

export {
  CarouselCard,
  ControledCarouselContainer,
};
