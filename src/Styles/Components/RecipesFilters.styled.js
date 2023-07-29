import styled from 'styled-components';

const FiltersContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0.7rem 0.5rem;

  section {
    button{
      border: none;
      background-color: inherit;
      img {
        height: 4.4em;
      }
    }
  }
`;

export default FiltersContainer;
