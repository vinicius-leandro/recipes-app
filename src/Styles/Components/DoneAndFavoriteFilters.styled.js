import styled from 'styled-components';

const FiltersContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  width: 80vw;

  section {
    margin-top: 0.7rem;
    margin-bottom: 1.5rem;

    button{
      border: none;
      background-color: inherit;
      img {
        height: 5.7em;
      }
    }
  }
`;

export default FiltersContainer;
