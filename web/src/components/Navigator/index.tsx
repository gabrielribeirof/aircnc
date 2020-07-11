import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '@contexts/auth';

import logo from '@assets/logo.png';

import { Col } from '@styles/Grid';
import { Button, LightButton } from '@components/Elements';
import { Container, Logo, MenuLink } from './styles';

const SearchHeader: React.FC = () => {
  const { signed } = useContext(AuthContext);

  return (
    <Container>
      <Col flex="1">
        <Logo id="logo" src={logo} alt="Aircnc" />
      </Col>
      <Col justify="end" alignItems="center" flex="1">
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/spots">Spots</MenuLink>
        {!signed ? (
          <>
            <MenuLink to="/" bold="true">Login</MenuLink>
            <LightButton to="/signup">Sign Up</LightButton>
          </>
        ) : (
          <Link to="/spots">
            <Button>Create spot</Button>
          </Link>
        )}
      </Col>
    </Container>
  )
};

export default SearchHeader;
