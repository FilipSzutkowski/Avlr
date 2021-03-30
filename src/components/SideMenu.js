import React, { useState } from 'react';
import FullMenu from './FullMenu';
import IndividualDetails from './IndividualDetails';
import { IoChevronBackCircle } from 'react-icons/io5';

const SideMenu = ({ nodes, rootId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return isExpanded ? (
    <FullMenu>
      <IndividualDetails
        nodes={nodes}
        rootId={rootId}
        collapseButton={() => setIsExpanded(!isExpanded)}
      />
    </FullMenu>
  ) : (
    <section
      className="fixed flex items-center bottom-10 bg-backgroundWhite text-primaryGreen py-3 px-6 shadow-sideMenuShadow rounded-tr-lg rounded-br-lg"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <p>0612 i Stamtavle 21</p>
      <IoChevronBackCircle className="text-secondaryBrown ml-12 text-2xl" />
    </section>
  );
};

export default SideMenu;