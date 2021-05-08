import { IoPencil, IoTrash } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Button from '../../utilities/Button';
import GenderIcon from '../../utilities/GenderIcon';
const IndividualsList = ({ tree, url, treeIndex }) => {
  return tree.length > 0 ? (
    tree.map(({ id, regNr, color, gender }, index) => (
      <section className="group flex hover:bg-secondaryBrown">
        <Link
          to={`${url}/${treeIndex}/${index}`}
          key={id}
          className="flex-grow flex flex-col py-3 text-lg hover:text-backgroundWhite group-hover:text-backgroundWhite"
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
        <Button
          className="bg-backgroundWhite shadow-none py-0 my-4 rounded-none group-hover:bg-secondaryBrown menuIcon"
          title="Rediger stamtavlen"
        >
          <IoPencil className="text-xl text-secondaryBrown group-hover:text-backgroundWhite md:text-2xl" />
        </Button>
        <Button
          className="bg-backgroundWhite shadow-none py-0 my-4 rounded-none group-hover:bg-secondaryBrown menuIcon"
          title="Slett stamtavlen"
        >
          <IoTrash className="text-xl text-secondaryBrown group-hover:text-backgroundWhite md:text-2xl" />
        </Button>
      </section>
    ))
  ) : (
    <p className="text-center font-light mt-4 mb-4 text-secondaryBrown">
      Ser ut som du ikke har lagt til noen individer ennå!
    </p>
  );
};

export default IndividualsList;
