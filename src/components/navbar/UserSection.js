import React, { useState } from 'react';
import profilePic from '../assets/profilePic.png';
import Button from '../utilities/Button';
import { IoChevronDownCircle, IoChevronUpCircle } from 'react-icons/io5';

const UserSection = ({ onClick, isNavbarExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const compareToNavbar = () =>
    isNavbarExpanded !== isExpanded
      ? setIsExpanded((isExpanded) => !isExpanded)
      : null;
  compareToNavbar();
  return (
    <Button
      className="ml-auto flex items-center space-x-1 cursor-pointer group bg-backgroundWhite shadow-none py-0 px-0"
      onClick={onClick}
    >
      <p className="mr-1 text-neutralDarkBrown opacity-70">Hallo, Meister!</p>
      <img
        className="w-8 rounded-full shadow-lg border-2 border-primaryGreen"
        src={profilePic}
        alt="profile"
      />
      {isExpanded ? (
        <IoChevronUpCircle className="text-secondaryBrown" />
      ) : (
        <IoChevronDownCircle className="text-primaryGreen group-hover:text-secondaryBrown" />
      )}
    </Button>
  );
};

export default UserSection;
