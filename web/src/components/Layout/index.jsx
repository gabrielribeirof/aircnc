import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

const Layout = ({ children }) => (
  <Container>
    <img src={logoImg} alt="Logo" />

    <Content>
      {children}
    </Content>
  </Container>
);

export default Layout;
