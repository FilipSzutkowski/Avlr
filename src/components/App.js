import React, { useState } from 'react';
import FamilyTree from './FamilyTree';
import Navbar from './navbar/Navbar';
import SideMenu from './SideMenu';
import nodeTree from './Nodes';

const App = () => {
  const [nodes, setNodes] = useState(nodeTree);
  const [rootId, setRootId] = useState('HkqEDLvxE');
  return (
    <div className="container text-neutralDarkBrown w-full h-full">
      <Navbar />
      <FamilyTree
        rootId={rootId}
        nodes={nodes}
        WIDTH={200} //dimensions of node one element
        HEIGHT={150}
      />
      <SideMenu nodes={nodes} rootId={rootId} />
    </div>
  );
};

export default App;
