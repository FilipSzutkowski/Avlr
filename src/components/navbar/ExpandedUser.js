import { Link } from 'react-router-dom';

const ExpandedUser = ({ onClick }) => {
  return (
    <nav
      className="flex flex-col z-20 mx-4 py-3 space-y-4 text-right"
      onClick={onClick}
    >
      <ul>
        <li>
          <Link to="#">Min Profil</Link>
        </li>
        <li>
          <Link to="/mine_stamtavler">Mine stamtavler</Link>
        </li>
        <li>
          <Link to="#">Logg ut</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ExpandedUser;
