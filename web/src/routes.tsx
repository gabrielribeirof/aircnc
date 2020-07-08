import React, { useContext } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import AuthContext from '@contexts/auth';

import Home from '@pages/Home';
import SignUp from '@pages/SignUp';
import Spots from '@pages/Spots';
import Details from '@pages/Details';

const PrivateRoute = ({ component, ...rest }: any) => {
  const { signed } = useContext(AuthContext);

  const privateComponent = (props: any) => (
    signed ? (
      React.createElement(component, props)
    ) : (
      <Redirect to="/" />
    )
  );

  return <Route {...rest} render={privateComponent} />;
};

const Routes: React.FC = () => (
  <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={SignUp} path="/signup" />
    <PrivateRoute component={Spots} path="/spots" exact />
    <PrivateRoute component={Details} path="/spots/:id" />
  </BrowserRouter>
);

export default Routes;
