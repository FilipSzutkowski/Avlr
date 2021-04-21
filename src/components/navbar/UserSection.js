import React, { useState } from 'react';
import profilePic from '../assets/profilePic.png';
import Button from '../utilities/Button';
import Loading from '../utilities/Loading';
import LogIn from '../auth/LogIn';
import {
  IoChevronDownCircle,
  IoChevronUpCircle,
  IoPerson,
} from 'react-icons/io5';

const UserSection = ({
  onClick,
  isNavbarExpanded,
  loading,
  isAuthenticated,
  user,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const compareToNavbar = () =>
    isNavbarExpanded !== isExpanded
      ? setIsExpanded((isExpanded) => !isExpanded)
      : null;
  compareToNavbar();
  return isAuthenticated ? (
    <Button
      className="ml-auto flex items-center space-x-1 cursor-pointer group bg-backgroundWhite shadow-none py-0 px-0"
      onClick={onClick}
    >
      <p className="mr-1 text-neutralDarkBrown opacity-70 font-light">
        Hallo, {user.nickname}!
      </p>
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
  ) : loading ? (
    <Loading className="ml-auto"> </Loading>
  ) : (
    <LogIn className="ml-auto bg-secondaryBrown shadow-logoShadow">
      Logg inn
      <IoPerson className="text-backgroundWhite ml-3" />
    </LogIn>
  );
};

export default UserSection;
