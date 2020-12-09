import React, { useContext } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import AuthContext from '../contexts/auth';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import Spots from '../pages/Spots';
import NewSpot from '../pages/Spots/New';
import BookSpot from '../pages/Spots/Book';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { signed } = useContext(AuthContext);

  if (!signed) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Route component={Home} path="/" exact />
      <Route component={SignUp} path="/signup" />
      <PrivateRoute component={Spots} path="/spots" exact />
      <PrivateRoute component={NewSpot} path="/spots/new" />
      <PrivateRoute component={BookSpot} path="/spots/:spot_id/book" />
    </Layout>
  </BrowserRouter>
);

export default Routes;
