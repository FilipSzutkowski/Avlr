import { useAuth0 } from '@auth0/auth0-react';

const LogIn = () => {
  const { loginWithRedirect, isAuthenticated, user, loading } = useAuth0();
  return isAuthenticated && !loading ? (
    <h1 className="relative top-16">Logget inn! Velkommen {user.nickname}</h1>
  ) : (
    <button className="relative top-16" onClick={() => loginWithRedirect()}>
      Logg inn
    </button>
  );
};

export default LogIn;
