import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import {
  Container, RequestContainer, Grid, SpotItem,
} from './styles';

const SpotList = () => {
  const [spots, setSpots] = useState([]);
  const [requests, setRequests] = useState([]);

  const history = useHistory();

  useEffect(() => {
    api.get('bookings', {
      params: {
        status: 'pending',
      },
    }).then((response) => {
      setRequests(response.data);
    });

    api.get('spots').then((response) => {
      setSpots(response.data);
    });
  }, []);

  const handleAccept = useCallback(async (id) => {
    await api.post(`bookings/${id}/approve`);

    setRequests(requests.filter((request) => request._id !== id));
  }, [requests]);

  const handleReject = useCallback(async (id) => {
    await api.post(`bookings/${id}/reject`);

    setRequests(requests.filter((request) => request._id !== id));
  }, [requests]);

  return (
    <Container>
      <RequestContainer>
        {requests.map((request) => {
          const date = new Date(request.date);

          const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

          return (
            <div key={request._id}>
              <span>
                <b>{request.user.email}</b>
                {' '}
                está solicitando uma reserva em
                {' '}
                <b>{request.spot.name}</b>
                {' '}
                para a data:
                {' '}
                <b>{formattedDate}</b>
                .
              </span>

              <button
                type="button"
                className="accept"
                onClick={() => handleAccept(request._id)}
              >
                ACEITAR
              </button>

              <button
                type="button"
                className="reject"
                onClick={() => handleReject(request._id)}
              >
                REJEITAR
              </button>
            </div>
          );
        })}
      </RequestContainer>

      <Grid>
        {spots.map((spot) => (
          <SpotItem key={spot._id} onClick={() => history.push(`/spot/${spot._id}`)}>
            <header>
              <img src={spot.thumbnail_url} alt="Thumbnail" />
            </header>

            <span className="title">{spot.name}</span>
            <span className="price">{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>
          </SpotItem>
        ))}
      </Grid>
    </Container>
  );
};

export default SpotList;
