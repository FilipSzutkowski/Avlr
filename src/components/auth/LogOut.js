import { useAuth0 } from '@auth0/auth0-react';
import Button from '../utilities/Button';

const LogOut = () => {
  const { logout } = useAuth0();
  return (
    <Button
      className="relative top-16"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Ut
    </Button>
  );
};

export default LogOut;
