import { Link } from 'react-router-dom';
const FamilyTreeList = ({ trees, url }) => {
  return trees.length > 0 ? (
    trees.map(({ id, name, race }, index) => (
      <Link
        to={`${url}/${index}`}
        key={id}
        className="group flex-col py-3 justify-between hover:bg-secondaryBrown hover:text-backgroundWhite"
      >
        <dt className="mx-3 text-lg">{name ?? 'Stamtavle uten navn'}</dt>
        <dd className="mx-3 text-sm opacity-80 text-secondaryBrown group-hover:text-backgroundWhite">
          {race ?? 'Stamtavle uten rase'}
        </dd>
      </Link>
    ))
  ) : (
    <p className="text-center font-light mt-4 mb-4 text-secondaryBrown">
      Ser ut som du ikke har opprettet noen stamtavler ennå!
    </p>
  );
};

export default FamilyTreeList;
