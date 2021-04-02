import FullMenu from './FullMenu';
import Loading from './utilities/Loading';
//import Button from './utilities/Button';
import { Link } from 'react-router-dom';

const UserFamilyTrees = ({ trees, loading }) => {
  return (
    <FullMenu title="Dine stamtavler">
      {loading ? (
        <Loading />
      ) : trees ? (
        <div className="flex flex-col divide-y divide-primaryGreen divide-opacity-50 h-full text-neutralDarkBrown">
          {trees.map(({ id, name }) => (
            <Link
              to="#"
              key={id}
              className="flex py-3 hover:bg-secondaryBrown hover:text-backgroundWhite"
            >
              <span className="mx-3">{name}</span>
            </Link>
          ))}
        </div>
      ) : (
        <p>Det har oppstått en feil.</p>
      )}
    </FullMenu>
  );
};

export default UserFamilyTrees;
