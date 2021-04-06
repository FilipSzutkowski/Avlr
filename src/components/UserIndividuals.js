import IndividualsList from './IndividualsList';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const UserIndividuals = ({ trees, url, titleChange }) => {
  const { treeIndex } = useParams();
  const { treeData: tree, name } = trees[treeIndex];

  useEffect(() => {
    titleChange(name);
  });
  return (
    <div className="flex flex-col divide-y divide-primaryGreen divide-opacity-50 h-full text-neutralDarkBrown">
      <IndividualsList tree={tree} treeIndex={treeIndex} url={url} />
    </div>
  );
};

export default UserIndividuals;
