import React from 'react';
import ReactFamilyTree from 'react-family-tree';
import FamilyNode from './FamilyNode';

const FamilyTree = ({ rootId, nodes, WIDTH, HEIGHT }) => {
  return (
    <article className="relative overflow-auto top-16">
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
    </article>
  );
};

export default FamilyTree;
