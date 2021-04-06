import React, { useState } from 'react';
import UserSection from './UserSection';
import ExpandedUser from './ExpandedUser';
import BackgroundDropShadow from '../utilities/BackgroundDropShadow';
import { ReactComponent as Logo } from '../assets/Logo.svg';

const Navbar = () => {
  const [isExpanded, setExpand] = useState(false);
  const handleClick = () => {
    setExpand((isExpanded) => !isExpanded);
  };
  return (
    <>
      <nav className="fixed top-0 z-30 rounded-b-xl shadow-lg bg-backgroundWhite py-1 w-screen">
        <ul className="flex items-center text-primaryGreen font-light text-sm mx-4">
          <li>
            <Logo className="w-20 shadow-logoShadow rounded-tl-logoTopLeft rounded-br-logoBottomRight rounded-tr-logoTopRight rounded-bl-logoBottomLeft" />
          </li>
          <li className="hidden sm:inline-block mx-4">Hjem</li>
          <li className="hidden sm:inline-block mx-4">Mine Stamtavler</li>
          <li className="hidden sm:inline-block mx-4">Om Avlr</li>
          <UserSection onClick={handleClick} isNavbarExpanded={isExpanded} />
        </ul>
        {isExpanded && <ExpandedUser onClick={handleClick} />}
      </nav>
      {isExpanded && <BackgroundDropShadow onClick={handleClick} />}
    </>
  );
};

export default Navbar;
