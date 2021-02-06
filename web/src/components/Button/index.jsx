import React from 'react';

import { Container } from './styles';

const Button = ({ children, isCancellation, ...rest }) => (
  <Container {...rest} isCancellation={isCancellation}>
    {children}
  </Container>
);

export default Button;
