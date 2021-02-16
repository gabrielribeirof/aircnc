import React from 'react';

import { Container, TextareaUnderline } from './styles';

const Textarea = ({ ...rest }) => (
  <Container>
    <textarea {...rest} />
    <TextareaUnderline />
  </Container>
);

export default Textarea;
