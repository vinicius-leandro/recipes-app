import styled from 'styled-components';

const HeaderContainer = styled.section`
  background-image: url(${(props) => props.$backgroundimage});
  background-position: center;
  background-size: cover;
  height: 25vh;
  width: 100vw;

  div {
    position: absolute;
    top: 0;
    left: 0;
    height: 25vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.3);
  }

  h1, p, section {
    position: absolute;
  }

  p {
    top: 2vh;
    left: 5vw;
    font-weight: 300;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.yellow};
  }

  section {
    top: 0.5vh;
    right: 2vw;
    width: 3.5rem;
  }

  h1 {
    top: 12.5vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 900;
    font-size: 20px;
    letter-spacing: 2px;
  }

  /* figure {
    img {
      width: 100vw;
  }
  } */
`;

export default HeaderContainer;
