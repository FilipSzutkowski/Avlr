import React from 'react';
import './FamilyNodeStyle.css';

const FamilyNode = ({ node, style, isRoot }) => {
  return (
    <div className="root text-primaryGreen" style={style}>
      <div className="inner">
        <p className="">{isRoot ? 'Root' : ''}</p>
      </div>
    </div>
  );
};

export default FamilyNode;
