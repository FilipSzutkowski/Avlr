import { useAuth0 } from '@auth0/auth0-react';
import Button from '../utilities/Button';

const LogOut = ({ className, children }) => {
  const { logout } = useAuth0();
  return (
    <Button
      className={className}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      {children}
    </Button>
  );
};

export default LogOut;
