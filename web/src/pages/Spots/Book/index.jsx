import React, { useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../../services/api';

import Card from '../../../components/Card';
import Button from '../../../components/Button';

const Book = () => {
  const [date, setDate] = useState('');

  const { spot_id } = useParams();
  const history = useHistory();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    try {
      await api.post('/bookings', {
        date,
        spot: spot_id,
      });

      alert('Solicitação de reserva enviada');

      history.push('/spots');
    } catch (err) {
      alert('Erro ao solicitar reserva');
    }
  }, [date, spot_id, history]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">DATA DE INTERESSE *</label>
        <input
          type="date"
          id="date"
          placeholder="Qual data você quer reservar?"
          min="2019-09-10"
          max="2021-01-01"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <Button type="submit">SOLICITAR RESERVA</Button>

        <Button isCancellation onClick={() => history.push('/spots')}>
          CANCELAR
        </Button>
      </form>
    </Card>
  );
};

export default Book;
