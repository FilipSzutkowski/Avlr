import React from 'react';
import FamilyTree from './FamilyTree';
import Navbar from './Navbar';
import nodesTree from './Nodes';

const App = () => {
  return (
    <div className="container text-neutralDarkBrown min-w-full min-h-full">
      <Navbar />
      <FamilyTree
        rootId="HkqEDLvxE"
        nodes={nodesTree}
        WIDTH={200} //dimensions of one element
        HEIGHT={150}
      />
    </div>
  );
};

export default App;
