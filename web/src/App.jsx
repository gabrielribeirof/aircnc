import React from 'react';
import { AuthProvider } from './hooks/auth';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App = () => (
  <AuthProvider>
    <Routes />
    <GlobalStyle />
  </AuthProvider>
);

export default App;
