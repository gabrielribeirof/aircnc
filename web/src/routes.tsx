import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '@pages/Home';
import SignUp from '@pages/SignUp';
import Spots from '@pages/Spots';
import Details from '@pages/Details';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={SignUp} path="/signup" />
    <Route component={Spots} path="/spots" exact />
    <Route component={Details} path="/spots/:id" />
  </BrowserRouter>
);

export default Routes;
