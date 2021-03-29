import React from 'react';
import profilePic from './assets/profilePic.png';
import { IoChevronDownCircle } from 'react-icons/io5';

const UserSection = ({ onClick }) => {
  return (
    <li
      className="ml-auto flex items-center space-x-1 cursor-pointer group focus:bg-primaryGreen"
      onClick={onClick}
    >
      <img
        className="w-8 rounded-full shadow-lg border-2 border-primaryGreen"
        src={profilePic}
        alt="profile"
      />
      <IoChevronDownCircle className="group-hover:text-secondaryBrown" />
    </li>
  );
};

export default UserSection;
