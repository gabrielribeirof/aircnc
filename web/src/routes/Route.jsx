import React from 'react';
import { Redirect, Route as RouteDOM } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import Layout from '../components/Layout';

const Route = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const { user } = useAuth();

  if (!user && isPrivate) {
    return <Redirect to="/" />;
  }

  if (user && !isPrivate) {
    return <Redirect to="/spots" />;
  }

  return (
    <RouteDOM
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default Route;
