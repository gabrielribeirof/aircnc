import React from 'react';

import Header from '../Header';

import { Wrapper } from './styles';

const Layout = ({ children }) => (
  <>
    <Header />
    <Wrapper>
      {children}
    </Wrapper>
  </>
);

export default Layout;
