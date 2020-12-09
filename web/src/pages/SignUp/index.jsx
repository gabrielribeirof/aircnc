import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import api from '../../services/api';

import AuthContext from '../../contexts/auth';

import Card from '../../components/Card';
import Button from '../../components/Button';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUser, signOut } = useContext(AuthContext);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post('users', {
        name,
        email,
        password,
      });

      setUser(response.data.user);
      history.push('/spots');
    } catch (err) {
      signOut();
      history.push('/');
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NOME *</label>
        <input
          id="name"
          placeholder="Seu nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">SENHA *</label>
        <input
          type="password"
          id="password"
          placeholder="Uma senha segura"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button type="submit">REGISTRE-SE</Button>

        <span className="hot-link">
          Já tem uma conta?
          {' '}
          <Link to="/">Entre agora</Link>
        </span>
      </form>
    </Card>
  );
};

export default SignUp;
