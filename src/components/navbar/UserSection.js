import React, { useState } from 'react';
import profilePic from '../assets/profilePic.png';
import { IoChevronDownCircle, IoChevronUpCircle } from 'react-icons/io5';

const UserSection = ({ onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
    onClick();
  };
  return (
    <li
      className="ml-auto flex items-center space-x-1 cursor-pointer group focus:bg-primaryGreen"
      onClick={handleClick}
    >
      <img
        className="w-8 rounded-full shadow-lg border-2 border-primaryGreen"
        src={profilePic}
        alt="profile"
      />
      {isExpanded ? (
        <IoChevronUpCircle className="text-secondaryBrown" />
      ) : (
        <IoChevronDownCircle className="group-hover:text-secondaryBrown" />
      )}
    </li>
  );
};

export default UserSection;
