import React from 'react';
import { useLocation } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/logo.svg';

import {
  Container,
  Side,
  Logo,
  Nav,
  NavLink,
  ActionBar,
  Action,
  ActionHighlighted,
  UserHighlighted,
} from './styles';

const Header = () => {
  const { user, signOut } = useAuth();

  const location = useLocation();

  return (
    <Container>
      <Side>
        <Logo to="/">
          <img src={logoImg} alt="Aircnc" />
        </Logo>
      </Side>

      <Nav>
        <NavLink to="/" selected={location.pathname === '/'}>Home</NavLink>

        {!!user && (
          <>
            <NavLink to="/spots" selected={location.pathname === '/spots'}>
              Spots
            </NavLink>

            <NavLink to="/spots/new" selected={location.pathname === '/spots/new'}>
              Create Spot
            </NavLink>
          </>
        )}
      </Nav>

      <ActionBar>
        {!user ? (
          <>
            <Action to="/signin">Login</Action>
            <ActionHighlighted to="/signup">Sign Up</ActionHighlighted>
          </>
        ) : (
          <>
            <UserHighlighted onClick={() => signOut()} to="/">
              <div>{user.name.split('')[0]}</div>
              Exit
            </UserHighlighted>
          </>
        )}
      </ActionBar>
    </Container>
  );
};

export default Header;
