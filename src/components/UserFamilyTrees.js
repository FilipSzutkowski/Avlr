import Loading from './utilities/Loading';
import { Link } from 'react-router-dom';

const UserFamilyTrees = ({ trees, loading, url }) => {
  return loading ? (
    <Loading />
  ) : trees ? (
    <div className="flex flex-col divide-y divide-primaryGreen divide-opacity-50 h-full text-neutralDarkBrown">
      {trees.map(({ id, name }) => (
        <Link
          to={`${url}/${id}`}
          key={id}
          className="flex py-3 hover:bg-secondaryBrown hover:text-backgroundWhite"
        >
          <span className="mx-3">{name ?? 'Stamtavle uten navn'}</span>
        </Link>
      ))}
    </div>
  ) : (
    <p>Det har oppstått en feil.</p>
  );
};

export default UserFamilyTrees;
