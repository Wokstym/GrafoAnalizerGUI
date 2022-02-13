import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../user/useUser';

// handle the private routes
function PrivateRoute({ children }: { children: JSX.Element }): JSX.Element {
  const { user } = useUser();
  return user ? children : <Redirect to={{ pathname: '/login' }} />;
}

export default PrivateRoute;
