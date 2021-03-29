import React from 'react';
import FamilyTree from './FamilyTree';
import Navbar from './navbar/Navbar';
import SideMenu from './SideMenu';
import nodeTree from './Nodes';

const App = () => {
  return (
    <div className="container text-neutralDarkBrown w-full h-full">
      <Navbar />
      <FamilyTree
        rootId="HkqEDLvxE"
        nodes={nodeTree}
        WIDTH={200} //dimensions of node one element
        HEIGHT={150}
      />
      <SideMenu />
    </div>
  );
};

export default App;
