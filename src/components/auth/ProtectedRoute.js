import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute = ({ children, ...args }) => {
  return (
    <Route
      component={withAuthenticationRequired(() => children, {
        returnTo: args.path,
      })}
      {...args}
    />
  );
};

export default ProtectedRoute;
