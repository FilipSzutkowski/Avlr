import React, { useState } from 'react';
import UserSection from './UserSection';
import ExpandedUser from './ExpandedUser';
import BackgroundDropShadow from '../utilities/BackgroundDropShadow';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

const Navbar = ({ loading, isAuthenticated, user }) => {
  const [isExpanded, setExpand] = useState(false);
  const handleClick = () => {
    setExpand((isExpanded) => !isExpanded);
  };
  return (
    <>
      <nav className="fixed top-0 z-30 rounded-b-xl shadow-lg bg-backgroundWhite py-1 w-screen">
        <ul className="flex items-center text-primaryGreen font-light text-sm mx-4">
          <li>
            <Link to="/">
              <Logo className="w-20 shadow-logoShadow rounded-tl-logoTopLeft rounded-br-logoBottomRight rounded-tr-logoTopRight rounded-bl-logoBottomLeft" />
            </Link>
          </li>
          <li className="hidden sm:inline-block mx-4">
            <Link to="/mine_stamtavler">Mine Stamtavler</Link>
          </li>
          <li className="inline-block mx-4">
            <Link to="/#om">Om Avlr</Link>
          </li>
          <UserSection
            onClick={handleClick}
            isNavbarExpanded={isExpanded}
            loading={loading}
            isAuthenticated={isAuthenticated}
            user={user}
          />
        </ul>
        {isExpanded && <ExpandedUser onClick={handleClick} />}
      </nav>
      {isExpanded && <BackgroundDropShadow onClick={handleClick} />}
    </>
  );
};

export default Navbar;
