import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Spot from '../pages/Spot';
import SpotList from '../pages/SpotList';
import SpotForm from '../pages/SpotForm';
import BookingForm from '../pages/BookingForm';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} path="/" exact />

      <Route component={SignIn} path="/signin" />
      <Route component={SignUp} path="/signup" />

      <Route component={Spot} path="/spot/:spot_id" isPrivate />
      <Route component={SpotList} path="/spots" exact isPrivate />
      <Route component={SpotForm} path="/spots/new" isPrivate />

      <Route component={BookingForm} path="/book/:spot_id" isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
