import ReactFamilyTree from 'react-family-tree';
import FamilyNode from './FamilyNode';

const FamilyTree = ({ rootId, nodes, WIDTH, HEIGHT }) => {
  return (
    <ReactFamilyTree
      nodes={nodes}
      rootId={rootId}
      width={WIDTH}
      height={HEIGHT}
      className="self-center"
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
  );
};

export default FamilyTree;
