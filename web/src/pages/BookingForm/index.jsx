import React, { useState, useCallback } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import api from '../../services/api';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const BookingForm = () => {
  const [date, setDate] = useState('');

  const history = useHistory();
  const { spot_id } = useParams();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    try {
      await api.post('bookings', {
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
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Booking</h1>

        <Input
          type="date"
          id="date"
          placeholder="What date do you want to book?"
          min="2021-02-01"
          max="2021-12-31"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <Button type="submit">Book</Button>

        <Button isCancellation onClick={() => history.push('/spots')}>
          Cancell
        </Button>
      </Form>
    </Container>
  );
};

export default BookingForm;
