import React, { useState, ChangeEvent, FormEvent } from 'react';
import api from '@services/api';

import {
  Container, ContainerMax, Col, Header, Main, Footer,
} from '@styles/Grid';
import Navigator from '@components/Navigator';
import Credits from '@components/Credits';
import { Input, Button } from '@components/Elements';
import { Form } from './styles';

interface UsersResponse {
  user: {
    spots: [],
    bookings: [],
    name: string,
    email: string
  },
  token: string
}

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleChangeEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const response = await api.post<UsersResponse>('/users', {
      name,
      email,
      password,
    });

    if (response.status !== 200) {
      alert(response.data);
    }
  }

  return (
    <Container flexDirection="column">
      <Header>
        <Navigator />
      </Header>
      <Main>
        <ContainerMax justify="center" alignItems="center">
          <Col>
            <Form onSubmit={handleSubmit}>
              <Input type="text" placeholder="Name" value={name} onChange={handleChangeName} />
              <Input type="text" placeholder="Email" value={email} onChange={handleChangeEmail} />
              <Input type="password" placeholder="Password" value={password} onChange={handleChangePassword} />
              <Button>Sign Up</Button>
            </Form>
          </Col>
        </ContainerMax>
      </Main>
      <Footer>
        <Credits />
      </Footer>
    </Container>
  );
};

export default SignUp;
