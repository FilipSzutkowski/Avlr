import React from 'react';
import './FamilyNodeStyle.css';

const FamilyNode = ({ node, style, isRoot }) => {
  return (
    <div className="absolute flex flex-col p-2" style={style}>
      <article
        className={`flex-col flex-1 border-current rounded-md bg-cardYellow ${
          isRoot ? 'border-2' : ''
        }`}
      >
        <p>{node.id}</p>
      </article>
    </div>
  );
};

export default FamilyNode;
