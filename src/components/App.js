import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import Navbar from './navbar/Navbar';
import FullMenu from './FullMenu';
import FamilyTreeContainer from './familyTreeView/FamilyTreeContainer';
import ErrorBoundary from './utilities/ErrorBoundary';

const App = () => {
  const [familyTrees, setFamilyTrees] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/getFamilyTrees');
        const data = await res.json();

        setFamilyTrees(data);
        setLoading(false);
      } catch (err) {
        setFamilyTrees(err);
        return err;
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container text-neutralDarkBrown w-full h-full">
      <Navbar />
      <ErrorBoundary>
        <Switch>
          <Route path="/mine_stamtavler">
            <FullMenu trees={familyTrees} loading={loading} />
          </Route>
          <Route path="/tree/:treeIndex/:individIndex">
            <FamilyTreeContainer trees={familyTrees} loading={loading} />
          </Route>
          <Route path="*">
            <h1 className="relative text-center top-16 text-lg">
              Siden finnes ikke
            </h1>
          </Route>
        </Switch>
      </ErrorBoundary>
    </div>
  );
};

export default App;
