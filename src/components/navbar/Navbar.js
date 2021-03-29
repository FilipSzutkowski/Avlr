import React, { useState } from 'react';
import UserSection from './UserSection';
import ExpandedUser from './ExpandedUser';
import { ReactComponent as Logo } from '../assets/Logo.svg';

const Navbar = () => {
  const [isExpanded, setExpand] = useState(false);
  return (
    <>
      <nav className="fixed z-20 rounded-b-xl shadow-lg bg-backgroundWhite py-1 w-screen">
        <ul className="flex items-center text-primaryGreen font-light text-sm mx-4">
          <li>
            <Logo className="w-20 shadow-logoShadow rounded-tl-logoTopLeft rounded-br-logoBottomRight rounded-tr-logoTopRight rounded-bl-logoBottomLeft" />
          </li>
          <li className="hidden sm:inline-block mx-4">Hjem</li>
          <li className="hidden sm:inline-block mx-4">Mine Stamtavler</li>
          <li className="hidden sm:inline-block mx-4">Om Avlr</li>
          <UserSection onClick={() => setExpand(!isExpanded)} />
        </ul>
        {isExpanded ? <ExpandedUser /> : null}
      </nav>
    </>
  );
};

export default Navbar;
