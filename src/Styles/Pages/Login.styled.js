import styled from 'styled-components';

const PageContainer = styled.section`
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.purple} 0 24.5rem,
    white 0
  );
  height: 100vh;
  overflow: hidden;
`;

const LogoContainer = styled.figure`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

const SaladContainer = styled.figure`
  img {
    width: 117vw;
    height: 40vh;
  }
`;

const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.purple};
    font-size: 1.25rem;
    font-style: italic;
    letter-spacing: 3px;
    margin-bottom: 1rem;
  }
`;

export {
  PageContainer,
  LogoContainer,
  SaladContainer,
  LoginContainer,
};
