import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import Navbar from './navbar/Navbar';
import SignUp from './auth/SignUp';
import ProtectedRoute from './auth/ProtectedRoute';
import FullMenu from './FullMenu';
import FamilyTreeContainer from './familyTreeView/FamilyTreeContainer';
import ErrorBoundary from './utilities/ErrorBoundary';
import Loading from './utilities/Loading';
import { useAuth0 } from '@auth0/auth0-react';
import TreeContext from './TreeContext';
import LandingPage from './LandingPage';

const App = () => {
  const [familyTrees, setFamilyTrees] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, isLoading, user } = useAuth0();
  console.log(
    `Auth0 auth: ${isAuthenticated}, Auth0 loading: ${isLoading}, State loading: ${loading}`
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/getFamilyTrees');
        const data = await res.json();

        console.log('inside fetch');
        setFamilyTrees(data);
        setLoading(false);
      } catch (err) {
        setFamilyTrees(err);
        return err;
      }
    };

    if (isLoading && !loading) setLoading(true);
    if (!isAuthenticated && !isLoading) setLoading(false);

    isAuthenticated && fetchData();
  }, [isLoading, isAuthenticated, loading]);

  return (
    <div className="text-neutralDarkBrown w-full h-full">
      <Navbar loading={loading} isAuthenticated={isAuthenticated} user={user} />
      <ErrorBoundary>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/ny_bruker">
            <SignUp />
          </Route>
          <ProtectedRoute path="/mine_stamtavler">
            <TreeContext.Provider value={{ familyTrees, setFamilyTrees }}>
              <FullMenu loading={loading} />
            </TreeContext.Provider>
          </ProtectedRoute>
          <ProtectedRoute path="/tree/:treeIndex/:individIndex">
            <FamilyTreeContainer trees={familyTrees} loading={loading} />
          </ProtectedRoute>
          <Route path="*">
            {loading ? (
              <Loading className="relative text-center top-16 text-lg" />
            ) : (
              <h1 className="relative text-center top-16 text-lg">
                Siden finnes ikke
              </h1>
            )}
          </Route>
        </Switch>
      </ErrorBoundary>
    </div>
  );
};

export default App;
