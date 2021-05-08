import { Link } from 'react-router-dom';
import {
  IoTrash,
  IoPencil,
  IoCloseCircle,
  IoCheckmarkCircle,
} from 'react-icons/io5';
import Button from '../../utilities/Button';
import { useState } from 'react';
const FamilyTreeList = ({ trees, url, handleEdit, handleDelete }) => {
  const [confirmDelete, setConfirmDelete] = useState({});

  const handleClick = (e) => {
    const status = confirmDelete[e.currentTarget.id] ? false : true;
    setConfirmDelete({ [e.currentTarget.id]: status });
  };

  return trees.length > 0 ? (
    trees.map(({ id, name, race }, index) => (
      <section
        className="group flex justify-between items-center hover:bg-secondaryBrown"
        key={id}
      >
        <Link
          to={`${url}/${index}`}
          className="flex-grow py-3 group-hover:text-backgroundWhite"
        >
          <dl>
            <dt className="mx-3 text-lg">{name ?? 'Stamtavle uten navn'}</dt>
            <dd className="mx-3 text-sm opacity-80 text-secondaryBrown group-hover:text-backgroundWhite">
              {race ?? 'Stamtavle uten rase'}
            </dd>
          </dl>
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
      Ser ut som du ikke har opprettet noen stamtavler ennå!
    </p>
  );
};

export default FamilyTreeList;
