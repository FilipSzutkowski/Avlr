import { Link } from 'react-router-dom';
const FamilyTreeList = ({ trees, url }) => {
  return trees.length > 0 ? (
    trees.map(({ id, name }, index) => (
      <Link
        to={`${url}/${index}`}
        key={id}
        className="flex py-3 hover:bg-secondaryBrown hover:text-backgroundWhite"
      >
        <span className="mx-3">{name ?? 'Stamtavle uten navn'}</span>
      </Link>
    ))
  ) : (
    <p className="text-center font-light mt-4 mb-4 text-secondaryBrown">
      Ser ut som du ikke har opprettet noen stamtavler ennå!
    </p>
  );
};

export default FamilyTreeList;
