import React from 'react';

import { Container, InputUnderline } from './styles';

const Input = ({ ...rest }) => (
  <Container>
    <input {...rest} />
    <InputUnderline />
  </Container>
);

export default Input;
