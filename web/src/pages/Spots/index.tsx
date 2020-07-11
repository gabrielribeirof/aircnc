import React, { useState, useEffect } from 'react';
import { auth } from '@services/api';

import {
  Container, Header, Main, Footer,
} from '@styles/Grid';
import Navigator from '@components/Navigator';
import Credits from '@components/Credits';
import { Button } from '@components/Elements';
import {
  SpotList, Spot, SpotInfo,
} from './styles';

interface ISpot {
  id: string,
  name: string,
  price: string,
  thumbnail: string,
  tags: [string]
}

const Spots: React.FC = () => {
  const [spots, setSpots] = useState<ISpot[]>([]);

  useEffect(() => {
    auth.get('spots').then((response) => {
      setSpots(response.data);
    });
  }, []);

  return (
  <Container flexDirection="column">
    <Header>
      <Navigator />
    </Header>
    <Main>
      <SpotList>
        {spots.map((spot) => (
          <Spot key={spot.id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail})` }} />
            <SpotInfo>
              <strong>{spot.name}</strong>
              <span>${spot.price}/day</span>
              <Button type="submit">BOOKING</Button>
            </SpotInfo>
          </Spot>
        ))}
      </SpotList>
    </Main>
    <Footer>
      <Credits />
    </Footer>
  </Container>
  );
};

export default Spots;
