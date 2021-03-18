import React from 'react';
import './FamilyNodeStyle.css';

const FamilyNode = ({ node, style, isRoot }) => {
  return (
    <div className="root" style={style}>
      <div className="inner">
        <p>{isRoot ? 'Root' : ''}</p>
      </div>
    </div>
  );
};

export default FamilyNode;
