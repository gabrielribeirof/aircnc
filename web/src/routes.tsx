import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';

const Routes = () => (
  <BrowserRouter>
    <Route component={Home} path="/" exact />
  </BrowserRouter>
);

export default Routes;
