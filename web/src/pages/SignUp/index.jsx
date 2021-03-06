import React, { useState, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const SignIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    try {
      await signUp({ name, email, password });

      history.push('/spots');
    } catch (err) {
      alert(err);
    }
  }, [name, email, password, history, signUp]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>

        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="submit">Enter</Button>

        <span className="hot-link">
          You already have an account?
          {' '}
          <Link to="/signin">Login now</Link>
        </span>
      </Form>
    </Container>
  );
};

export default SignIn;
