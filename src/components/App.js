import React from 'react';
import FamilyTree from './FamilyTree';
import nodesTree from './Nodes';

const App = () => {
  return (
    <div className="container text-neutralDarkBrown">
      <FamilyTree
        rootId="HkqEDLvxE"
        nodes={nodesTree}
        WIDTH={200}
        HEIGHT={150}
      />
    </div>
  );
};

export default App;
