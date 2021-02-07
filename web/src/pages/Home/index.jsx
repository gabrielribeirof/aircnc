import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';
import Button from '../../components/Button';

import { Container } from './styles';

const Home = () => {
  const { user } = useAuth();
  const history = useHistory();

  return (
    <Container>
      <Header />

      <main>
        <h1>Find and offer hosting places</h1>
        <h2>Fast, easy just fun</h2>

        {user ? (
          <Button onClick={() => history.push('/spots')}>Go to spots</Button>
        ) : (
          <Button onClick={() => history.push('/signup')}>Sign Up now</Button>
        )}
      </main>
    </Container>
  );
};

export default Home;
