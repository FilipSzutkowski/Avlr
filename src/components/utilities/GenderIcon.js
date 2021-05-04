import React from 'react';
import { IoMdFemale, IoMdMale } from 'react-icons/io';

const GenderIcon = ({ gender, className }) => {
  return gender === 'male' ? (
    <IoMdMale className={`text-secondaryBrown ${className}`} />
  ) : gender === 'female' ? (
    <IoMdFemale className={`text-secondaryBrown ${className}`} />
  ) : (
    <div>?</div>
  );
};

export default GenderIcon;
