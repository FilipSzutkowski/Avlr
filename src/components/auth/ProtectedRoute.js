import { Route } from 'react-router-dom';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ children, setLoading, returnTo, ...args }) => {
  const { isLoading } = useAuth0;
  const callbackUrl = returnTo ?? '/mine_stamtavler';
  isLoading && setLoading(true);
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
