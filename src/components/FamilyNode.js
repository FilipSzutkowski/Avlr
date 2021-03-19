import React from 'react';
import './FamilyNodeStyle.css';
//import picture from './assets/kanin.png';

const FamilyNode = ({ node, style, isRoot }) => {
  return (
    <div className="absolute flex flex-col p-2" style={style}>
      <article
        className={`flex flex-col flex-1 border-neutralDarkBrown rounded-md bg-cardYellow p-2 ${
          isRoot ? 'border-2' : ''
        }`}
      >
        <h1>{node.merke}</h1>
        <p>{node.birthday}</p>
        <p>{node.kind}</p>
      </article>
    </div>
  );
};

export default FamilyNode;
