import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import Navbar from './navbar/Navbar';
import FullMenu from './FullMenu';
import FamilyTreeContainer from './familyTree/FamilyTreeContainer';

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
        setLoading(true);
        return err;
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container text-neutralDarkBrown w-full h-full">
      <Navbar />
      <Switch>
        <Route path="/mine_stamtavler">
          <FullMenu trees={familyTrees} loading={loading} />
        </Route>
        <Route path="/tree/:treeIndex/:individIndex">
          <FamilyTreeContainer trees={familyTrees} loading={loading} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
