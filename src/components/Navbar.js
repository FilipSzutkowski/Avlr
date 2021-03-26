import React from 'react';
import { ReactComponent as Logo } from './assets/Logo.svg';

const Navbar = () => {
  return (
    <nav>
      <ul className="flex p-3 items-center space-x-12 text-primaryGreen font-light rounded-b-xl shadow-xl">
        <li>
          <Logo className="ml-4 w-20 shadow-md rounded-tl-logoTopLeft rounded-br-logoBottomRight rounded-tr-logoTopRight rounded-bl-logoBottomLeft" />
        </li>
        <li>Hjem</li>
        <li>Mine Stamtavler</li>
        <li>Om Avlr</li>
      </ul>
    </nav>
  );
};

export default Navbar;
