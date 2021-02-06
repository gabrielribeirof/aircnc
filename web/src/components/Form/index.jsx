import React from 'react';

import { Container } from './styles';

const Form = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
);

export default Form;
