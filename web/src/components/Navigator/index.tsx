import React from 'react';
import { Col } from '@styles/Grid';

import logo from '@assets/logo.png';

import { LightButton } from '@components/Elements';
import { Container, Logo, MenuLink } from './styles';

const SearchHeader: React.FC = () => (
  <Container>
    <Col flex="1">
      <Logo id="logo" src={logo} alt="Aircnc" />
    </Col>
    <Col justify="end" alignItems="center" flex="1">
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/spots">Spots</MenuLink>
      <MenuLink to="/" bold>Login</MenuLink>
      <LightButton to="/signup">Sign Up</LightButton>
    </Col>
  </Container>
);

export default SearchHeader;
