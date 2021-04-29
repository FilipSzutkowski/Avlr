import FamilyTree from './FamilyTree';
import Loading from '../utilities/Loading';
import Button from '../utilities/Button';
import { IoChevronBackCircle } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import TreeContext from '../TreeContext';

const FamilyTreeContainer = ({ loading }) => {
  const { familyTrees } = useContext(TreeContext);
  const { treeIndex, individIndex } = useParams();
  const { treeData: nodes, name } = !loading && familyTrees[treeIndex];
  const { id: rootId, regNr } = !loading && nodes[individIndex];
  return loading ? (
    <Loading className="relative top-16" />
  ) : (
    <article className="relative overflow-auto top-16">
      <FamilyTree nodes={nodes} rootId={rootId} WIDTH={200} HEIGHT={150} />
      <Link
        to={`/mine_stamtavler/${treeIndex}/${individIndex}`}
        className="fixed bottom-10"
      >
        <Button
          className="bg-backgroundWhite text-primaryGreen py-3 px-6 shadow-sideMenuShadow rounded-l-none"
          title={`${regNr} i ${name}`}
        >
          <IoChevronBackCircle className="text-secondaryBrown ml-12 text-2xl" />
        </Button>
      </Link>
    </article>
  );
};

export default FamilyTreeContainer;
