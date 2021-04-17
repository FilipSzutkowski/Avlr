import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute = ({ children, returnTo, ...args }) => {
  const callbackUrl = returnTo ?? '/mine_stamtavler';
  return (
    <Route
      component={withAuthenticationRequired(() => children, {
        returnTo: callbackUrl,
      })}
      {...args}
    />
  );
};

export default ProtectedRoute;
