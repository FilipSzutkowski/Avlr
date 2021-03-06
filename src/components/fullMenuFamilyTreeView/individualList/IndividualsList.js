import { useState } from 'react';
import {
  IoTrash,
  IoPencil,
  IoCloseCircle,
  IoCheckmarkCircle,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Button from '../../utilities/Button';
import GenderIcon from '../../utilities/GenderIcon';
const IndividualsList = ({
  tree,
  url,
  treeIndex,
  handleEdit,
  handleDelete,
}) => {
  const [confirmDelete, setConfirmDelete] = useState({});

  const handleClick = (e) => {
    const status = confirmDelete[e.currentTarget.id] ? false : true;
    setConfirmDelete({ [e.currentTarget.id]: status });
  };
  return tree.length > 0 ? (
    tree.map(({ id, regNr, color, gender }, index) => (
      <section className="group flex hover:bg-secondaryBrown" key={id}>
        <Link
          to={`${url}/${treeIndex}/${index}`}
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
        {confirmDelete[index] ? (
          <>
            <Button
              className="bg-backgroundWhite shadow-none py-0 my-4 rounded-none group-hover:bg-secondaryBrown menuIcon"
              title="Bekreft"
              id={index}
              onClick={handleDelete}
            >
              <IoCheckmarkCircle className="text-xl text-secondaryBrown group-hover:text-backgroundWhite md:text-2xl" />
            </Button>
            <Button
              className="bg-backgroundWhite shadow-none py-0 my-4 rounded-none group-hover:bg-secondaryBrown menuIcon"
              title="Avbryt"
              onClick={handleClick}
            >
              <IoCloseCircle className="text-xl text-secondaryBrown group-hover:text-backgroundWhite md:text-2xl" />
            </Button>
          </>
        ) : (
          <>
            <Button
              className="bg-backgroundWhite shadow-none py-0 my-4 rounded-none group-hover:bg-secondaryBrown menuIcon"
              title="Rediger stamtavlen"
              id={index}
              onClick={handleEdit}
            >
              <IoPencil className="text-xl text-secondaryBrown group-hover:text-backgroundWhite md:text-2xl" />
            </Button>
            <Button
              className="bg-backgroundWhite shadow-none py-0 my-4 rounded-none group-hover:bg-secondaryBrown menuIcon"
              title="Slett stamtavlen"
              id={index}
              onClick={handleClick}
            >
              <IoTrash className="text-xl text-secondaryBrown group-hover:text-backgroundWhite md:text-2xl" />
            </Button>
          </>
        )}
      </section>
    ))
  ) : (
    <p className="text-center font-light mt-4 mb-4 text-secondaryBrown">
      Ser ut som du ikke har lagt til noen individer enn??!
    </p>
  );
};

export default IndividualsList;
