import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import AuthContext from '../../contexts/auth';

import Card from '../../components/Card';
import Button from '../../components/Button';

import { WelcomeBanner, SpotRequests, SpotList } from './styles';

const Spots = () => {
  const [spots, setSpots] = useState([]);
  const [requests, setRequests] = useState([]);

  const { user } = useContext(AuthContext);
  const history = useHistory();

  useEffect(async () => {
    const bookingsResponse = await api.get('bookings', {
      params: {
        status: 'pending',
      },
    });
    setRequests(bookingsResponse.data);

    const spotsResponse = await api.get('spots');
    setSpots(spotsResponse.data);
  }, []);

  async function handleAccept(id) {
    await api.post(`bookings/${id}/approve`);

    setRequests(requests.filter((request) => request._id !== id));
  }

  async function handleReject(id) {
    await api.post(`bookings/${id}/reject`);

    setRequests(requests.filter((request) => request._id !== id));
  }

  return (
    <Card>
      <WelcomeBanner>
        Seja bem-vindo(a)
        {' '}
        {user.name}
      </WelcomeBanner>

      <SpotRequests>
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
      </SpotRequests>

      <SpotList>
        {spots.map((spot) => (
          <div key={spots._id} className="spot-item">
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />

            <strong>{spot.name}</strong>
            <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span>

            <button
              type="button"
              disabled={spot.user._id === user._id}
              onClick={() => history.push(`/spots/${spot._id}/book`)}
            >
              {spot.user._id === user._id ? 'Seu ponto' : 'Solicitar reserva'}
            </button>
          </div>
        ))}
      </SpotList>

      <Button onClick={() => history.push('/spots/new')}>
        CADASTRAR NOVO PONTO
      </Button>
    </Card>
  );
};

export default Spots;
