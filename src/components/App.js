import React, { useState, useEffect } from 'react';
import FamilyTree from './familyTree/FamilyTree';
import Navbar from './navbar/Navbar';
import SideMenu from './SideMenu';

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
        return err;
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container text-neutralDarkBrown w-full h-full">
      <Navbar />
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
    </div>
  );
};

export default App;
