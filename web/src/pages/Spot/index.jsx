import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';

import Button from '../../components/Button';

import {
  Container,
  Thumbnail,
  Info,
  Head,
  Row,
  Tags,
  Description,
} from './styles';

const Spot = () => {
  const [spot, setSpot] = useState([]);

  const history = useHistory();
  const { spot_id } = useParams();

  useEffect(() => {
    api.get(`spots/${spot_id}`).then((response) => {
      setSpot(response.data);
    });
  }, [spot_id]);

  function generateKey(id) {
    return `${id}+${new Date().getTime()}`;
  }

  return (
    <Container>
      <Thumbnail>
        <img src={spot.thumbnail_url} alt="Thumbnail" />
      </Thumbnail>

      <Info>
        <Head>
          <Row>
            <div>
              <h1 className="title">{spot.name}</h1>
              <span className="place">São Paulo, Brazil</span>
            </div>

            <span className="price">
              $
              {spot.price}
              /dia
            </span>
          </Row>

          {spot.tags && spot.tags.length > 1 && (
            <Tags>
              {spot.tags.map((tag) => (
                <div key={generateKey(tag)}>{tag}</div>
              ))}
            </Tags>
          )}
        </Head>

        <Description>
          <h2>Description</h2>

          <p>
            {spot.description}
          </p>
        </Description>

        <div>
          <Button onClick={() => history.push(`/book/${spot_id}`)}>Book Now</Button>
        </div>
      </Info>
    </Container>
  );
};

export default Spot;
