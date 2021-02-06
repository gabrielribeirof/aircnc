import React, { useState, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();
  const history = useHistory();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    try {
      await signIn({ email, password });

      history.push('/spots');
    } catch (err) {
      alert(err);
    }
  }, [email, password, history, signIn]);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
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

        <Button>Enter</Button>

        <span className="hot-link">
          Not have an account yet?
          {' '}
          <Link to="/signup">Sign Up now</Link>
        </span>
      </Form>
    </Container>
  );
};

export default SignIn;
