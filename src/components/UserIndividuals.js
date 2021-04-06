import IndividualsList from './IndividualsList';
import { useParams } from 'react-router-dom';

const UserIndividuals = ({ trees, url }) => {
  const { treeIndex } = useParams();
  const tree = trees[treeIndex]?.treeData;
  return (
    <div className="flex flex-col divide-y divide-primaryGreen divide-opacity-50 h-full text-neutralDarkBrown">
      <IndividualsList tree={tree} treeIndex={treeIndex} url={url} />
    </div>
  );
};

export default UserIndividuals;
