import React from 'react';
import { IoReload } from 'react-icons/io5';

const Loading = ({ className }) => {
  return (
    <div className={`flex items-center text-lg ${className}`}>
      <IoReload className="mx-4 animate-spin" />
      <p>Laster inn...</p>
    </div>
  );
};

export default Loading;
