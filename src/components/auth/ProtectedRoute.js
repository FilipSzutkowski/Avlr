import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute = ({ children, ...args }) => {
  return (
    <Route component={withAuthenticationRequired(() => children)} {...args} />
  );
};

export default ProtectedRoute;
