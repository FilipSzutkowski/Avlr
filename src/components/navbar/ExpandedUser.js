import LogOut from '../auth/LogOut';
import { Link } from 'react-router-dom';

const ExpandedUser = ({ onClick }) => {
  return (
    <nav
      className="flex flex-col z-20 mx-4 py-3 items-end text-right font-light"
      onClick={onClick}
    >
      <ul>
        <li>
          <Link to="#">Min Profil</Link>
        </li>
        <li>
          <Link to="/mine_stamtavler">Mine stamtavler</Link>
        </li>
        <li className="flex flex-col items-end border-secondaryBrown border-t-1 mt-3">
          <LogOut className=" bg-transparent shadow-none text-neutralDarkBrown px-0 py-2 font-light">
            Logg ut
          </LogOut>
        </li>
      </ul>
    </nav>
  );
};

export default ExpandedUser;
