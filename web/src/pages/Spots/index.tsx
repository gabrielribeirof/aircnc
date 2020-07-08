import React from 'react';
import {
  Container, Header, Main, Footer,
} from '@styles/Grid';

import Navigator from '@components/Navigator';
import Credits from '@components/Credits';
import { Button } from '@components/Elements';

import {
  SpotList, Spot, SpotInfo,
} from './styles';

const Spots: React.FC = () => (
  <Container flexDirection="column">
    <Header>
      <Navigator />
    </Header>
    <Main>
      <SpotList>
        <Spot>
          <header style={{ backgroundImage: `url(${'./assets/bkp.png'})` }} />
          <SpotInfo>
            <strong>Test</strong>
            <span>R$50/day</span>
            <Button type="submit">BOOKING</Button>
          </SpotInfo>
        </Spot>
        <Spot>
          <header style={{ backgroundImage: `url(${'./assets/bkp.png'})` }} />
          <SpotInfo>
            <strong>Test</strong>
            <span>R$50/day</span>
            <Button type="submit">BOOKING</Button>
          </SpotInfo>
        </Spot>
        <Spot>
          <header style={{ backgroundImage: `url(${'./assets/bkp.png'})` }} />
          <SpotInfo>
            <strong>Test</strong>
            <span>R$50/day</span>
            <Button type="submit">BOOKING</Button>
          </SpotInfo>
        </Spot>
        <Spot>
          <header style={{ backgroundImage: `url(${'./assets/bkp.png'})` }} />
          <SpotInfo>
            <strong>Test</strong>
            <span>R$50/day</span>
            <Button type="submit">BOOKING</Button>
          </SpotInfo>
        </Spot>
      </SpotList>
    </Main>
    <Footer>
      <Credits />
    </Footer>
  </Container>
);

export default Spots;
