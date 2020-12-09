import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../contexts/auth';

import Card from '../../components/Card';
import Button from '../../components/Button';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signed, signIn } = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (signed) {
      history.push('/spots');
    }
  }, [signed, history]);

  function handleSubmit(event) {
    event.preventDefault();

    signIn(email, password);
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">SENHA *</label>
        <input
          type="password"
          id="password"
          placeholder="Sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="submit">ENTRAR</Button>

        <span className="hot-link">
          Ainda não tem uma conta?
          {' '}
          <Link to="/signup">Crie uma agora</Link>
        </span>
      </form>
    </Card>
  );
};

export default Home;
