import React, {
  useContext, useState, ChangeEvent, FormEvent,
} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '@contexts/auth';

import {
  Container, ContainerMax, Col, Header, Main, Footer,
} from '@styles/Grid';

import Navigator from '@components/Navigator';
import Credits from '@components/Credits';
import { Input, Button } from '@components/Elements';

import { Background } from './styles';

const Home: React.FC = () => {
  const { signed, signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    signIn(email, password);
  }

  return (
    <Container flexDirection="column">
      <Header>
        <Navigator />
      </Header>
      <Main>
        <Background>
          <ContainerMax flexDirection="column" alignItems="center">
            <h1>Find and offer hosting places</h1>
            <p>Fast, easy, just fun</p>
            {!signed ? (
              <Col justify="center" alignItems="center" flexDirection="column" width="65%">
                <form onSubmit={handleSubmit}>
                  <Input
                    type="text"
                    placeholder="Email"
                    onChange={handleChangeEmail}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    onChange={handleChangePassword}
                  />
                  <Button>Enter</Button>
                </form>
              </Col>
            ) : (
              <Link to="/spots">
                <Button>Go to spots</Button>
              </Link>
            )}
          </ContainerMax>
        </Background>
      </Main>
      <Footer>
        <Credits />
      </Footer>
    </Container>
  );
};

export default Home;
