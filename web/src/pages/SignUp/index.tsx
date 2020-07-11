import React, {
  useState, useContext, ChangeEvent, FormEvent
} from 'react';
import { useHistory } from 'react-router-dom';
import api from '@services/api';

import AuthContext from '@contexts/auth';

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
  const { setUser } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

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

    try {
      const response = await api.post<UsersResponse>('/users', {
        name,
        email,
        password,
      });

      setUser(response.data.user);
      history.push('/');
    } catch (err) {
      alert(err);
    };
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
