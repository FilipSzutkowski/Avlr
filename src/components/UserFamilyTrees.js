import FamilyTreeList from './FamilyTreeList';

const UserFamilyTrees = ({ trees, url }) => {
  return (
    <div className="flex flex-col divide-y divide-primaryGreen divide-opacity-50 h-full text-neutralDarkBrown">
      {<FamilyTreeList trees={trees} url={`${url}`} />}
    </div>
  );
};

export default UserFamilyTrees;
