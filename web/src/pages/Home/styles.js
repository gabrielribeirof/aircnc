import styled from 'styled-components';

import { Nav, ActionBar } from '../../components/Header/styles';

import backgroundImg from '../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundImg});

  header {
    box-shadow: none;

    ${Nav} a:first-child {
      color: #fff;
    }

    ${ActionBar} a + a ~ a {
      color: #fff;
    }
  }

  main {
    height: calc(100% - 175px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    h1, h2 {
      text-shadow: 3px 3px 0 #000;
      color: #FFF;
    }

    h1 {
      margin: 0;
      font-size: 38px;
    }

    h2 {
      margin-top: 0;
      margin-bottom: 15px;
      font-size: 28px;
    }
  }
`;
