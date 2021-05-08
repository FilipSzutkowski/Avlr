import { Link } from 'react-router-dom';
import { IoTrash, IoPencil } from 'react-icons/io5';
import Button from '../../utilities/Button';
const FamilyTreeList = ({ trees, url }) => {
  return trees.length > 0 ? (
    trees.map(({ id, name, race }, index) => (
      <section className="group flex justify-between hover:bg-secondaryBrown">
        <Link
          to={`${url}/${index}`}
          key={id}
          className="flex-grow py-3 group-hover:text-backgroundWhite"
        >
          <dl>
            <dt className="mx-3 text-lg">{name ?? 'Stamtavle uten navn'}</dt>
            <dd className="mx-3 text-sm opacity-80 text-secondaryBrown group-hover:text-backgroundWhite">
              {race ?? 'Stamtavle uten rase'}
            </dd>
          </dl>
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
      Ser ut som du ikke har opprettet noen stamtavler ennå!
    </p>
  );
};

export default FamilyTreeList;
