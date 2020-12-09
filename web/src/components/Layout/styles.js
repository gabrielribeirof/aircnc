import styled from 'styled-components';

import backgroundImg from '../../assets/background.jpg';

export const Container = styled.main`
  height: 100%;
  min-height: 100vh;
  padding: 20px;
  padding-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${backgroundImg});
`;

export const Content = styled.div`
  width: 420px;
  margin: 20px 0;

  @media(max-width: 920px) {
    width: 100%;
  }
`;
