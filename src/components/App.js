import React, { useState } from 'react';
import ReactFamilyTree from 'react-family-tree';
import FamilyNode from './FamilyNode';
import nodesTree from './Nodes';

const App = () => {
  const [nodes, setNodes] = useState(nodesTree);
  const rootId = 'dyTpfj6sr';
  const WIDTH = 230;
  const HEIGHT = 230;
  return (
    <div className="container text-neutralDarkBrown bg-backgroundWhite min-w-full min-h-full">
      <ReactFamilyTree
        color="#3a6351"
        nodes={nodes}
        rootId={rootId}
        width={WIDTH}
        height={HEIGHT}
        renderNode={(node) => (
          <FamilyNode
            key={node.id}
            node={node}
            isRoot={node.id === rootId}
            style={{
              width: WIDTH,
              height: HEIGHT,
              transform: `translate(${node.left * (WIDTH / 2)}px, ${
                node.top * (HEIGHT / 2)
              }px)`,
            }}
          />
        )}
      />
    </div>
  );
};

export default App;
