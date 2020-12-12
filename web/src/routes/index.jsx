import React from 'react';
import { BrowserRouter, Route as RouteDOM, Redirect } from 'react-router-dom';

import { useAuth } from '../contexts/auth';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Spots from '../pages/Spots';
import NewSpot from '../pages/Spots/New';
import BookSpot from '../pages/Spots/Book';

const Route = ({ component: Component, isPrivate = false, ...rest }) => {
  const { user } = useAuth();

  if (!user && isPrivate) {
    return <Redirect to="/" />;
  }

  if (user && !isPrivate) {
    return <Redirect to="/spots" />;
  }

  return <RouteDOM {...rest} render={(props) => <Component {...props} />} />;
};

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Route component={Home} path="/" exact />
      <Route component={SignUp} path="/signup" />
      <Route component={Spots} path="/spots" exact isPrivate />
      <Route component={NewSpot} path="/spots/new" isPrivate />
      <Route component={BookSpot} path="/spots/:spot_id/book" isPrivate />
    </Layout>
  </BrowserRouter>
);

export default Routes;
