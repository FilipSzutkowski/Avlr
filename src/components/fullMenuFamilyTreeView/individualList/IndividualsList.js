import { Link } from 'react-router-dom';
import GenderIcon from '../../utilities/GenderIcon';
const IndividualsList = ({ tree, url, treeIndex }) => {
  return tree.length > 0 ? (
    tree.map(({ id, regNr, color, gender }, index) => (
      <Link
        to={`${url}/${treeIndex}/${index}`}
        key={id}
        className="group flex flex-col py-3 text-lg hover:bg-secondaryBrown hover:text-backgroundWhite"
      >
        <dt className="mx-3 flex items-center">
          {regNr ?? 'Ikke noe registrerings nummer'}{' '}
          <GenderIcon
            gender={gender}
            className="ml-2 group-hover:text-backgroundWhite"
          />
        </dt>
        <dd className="mx-3 text-secondaryBrown text-sm group-hover:text-backgroundWhite">
          {color}
        </dd>
      </Link>
    ))
  ) : (
    <p className="text-center font-light mt-4 mb-4 text-secondaryBrown">
      Ser ut som du ikke har lagt til noen individer ennå!
    </p>
  );
};

export default IndividualsList;
