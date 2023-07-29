import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.purple};
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0.4rem 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export default FooterContainer;
