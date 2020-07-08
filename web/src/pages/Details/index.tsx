import React from 'react';
import {
  Container, ContainerMax, Header, Main, Footer,
} from '@styles/Grid';

import Navigator from '@components/Navigator';
import Credits from '@components/Credits';

const Details: React.FC = () => (
  <Container flexDirection="column">
    <Header>
      <Navigator />
    </Header>
    <Main>
      <ContainerMax>Spots Details</ContainerMax>
    </Main>
    <Footer>
      <Credits />
    </Footer>
  </Container>
);

export default Details;
