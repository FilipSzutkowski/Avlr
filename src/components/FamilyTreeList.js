import { Link } from 'react-router-dom';

const FamilyTreeList = ({ trees, url }) => {
  return trees.map(({ id, name }, index) => (
    <Link
      to={`${url}/${index}`}
      key={id}
      className="flex py-3 hover:bg-secondaryBrown hover:text-backgroundWhite"
    >
      <span className="mx-3">{name ?? 'Stamtavle uten navn'}</span>
    </Link>
  ));
};

export default FamilyTreeList;
