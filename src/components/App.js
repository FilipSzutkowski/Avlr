import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import FamilyTree from './familyTree/FamilyTree';
import Navbar from './navbar/Navbar';
import SideMenu from './SideMenu';
import UserFamilyTrees from './UserFamilyTrees';

const App = () => {
  const [nodes, setNodes] = useState(null);
  const [rootId, setRootId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/getTree');
        const data = await res.json();

        setNodes(data);
        setRootId('HkqEDLvxE');
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
          <UserFamilyTrees />
        </Route>
        <Route path="/">
          {loading ? (
            <div>Laster inn</div>
          ) : (
            <>
              <FamilyTree
                rootId={rootId}
                nodes={nodes}
                WIDTH={200} //dimensions of node one element
                HEIGHT={150}
              />
              <SideMenu nodes={nodes} rootId={rootId} />
            </>
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default App;
