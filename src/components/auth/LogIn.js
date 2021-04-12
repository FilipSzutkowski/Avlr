import { useAuth0 } from '@auth0/auth0-react';
import Button from '../utilities/Button';

const LogIn = ({ className }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button className={className} onClick={() => loginWithRedirect()}>
      Logg inn
    </Button>
  );
};

export default LogIn;
