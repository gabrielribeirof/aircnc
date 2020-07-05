import React from 'react';
import {
  Container, ContainerMax, Col, Header, Main, Footer,
} from '@styles/Grid';

import Navigator from '@components/Navigator';
import Credits from '@components/Credits';
import { Input, Button } from '@components/Elements';

import { Background } from './styles';

const Home: React.FC = () => (
  <Container flexDirection="column">
    <Header>
      <Navigator />
    </Header>
    <Main>
      <Background>
        <ContainerMax flexDirection="column" alignItems="center">
          <h1>Find and offer hosting places</h1>
          <p>Fast, easy, just fun</p>
          <Col justify="center" alignItems="center" flexDirection="column" width="65%">
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Enter</Button>
          </Col>
        </ContainerMax>
      </Background>
    </Main>
    <Footer>
      <Credits />
    </Footer>
  </Container>
);

export default Home;
