import { Link } from 'react-router-dom';
const IndividualsList = ({ tree, url, treeIndex }) => {
  return tree.length > 0 ? (
    tree.map(({ id, regNr }, index) => (
      <Link
        to={`${url}/${treeIndex}/${index}`}
        key={id}
        className="flex py-3 hover:bg-secondaryBrown hover:text-backgroundWhite"
      >
        <span className="mx-3">{regNr ?? 'Ikke noe registrerings nummer'}</span>
      </Link>
    ))
  ) : (
    <p className="text-center font-light mt-4 mb-4 text-secondaryBrown">
      Ser ut som du ikke har lagt til noen individer ennå!
    </p>
  );
};

export default IndividualsList;
