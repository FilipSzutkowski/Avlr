import { Link } from 'react-router-dom';
const IndividualsList = ({ tree, url, treeIndex }) => {
  return tree.map(({ id, regNr }, index) => (
    <Link
      to={`${url}/${treeIndex}/${index}`}
      key={id}
      className="flex py-3 hover:bg-secondaryBrown hover:text-backgroundWhite"
    >
      <span className="mx-3">{regNr ?? 'Ikke noe registrerings nummer'}</span>
    </Link>
  ));
};

export default IndividualsList;
