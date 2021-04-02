import React, { useState } from 'react';
import FullMenu from './FullMenu';
import IndividualDetails from './individualDetails/IndividualDetails';
import Button from './utilities/Button';
import { IoChevronBackCircle } from 'react-icons/io5';

const SideMenu = ({ nodes, rootId }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return isExpanded ? (
    <FullMenu title="individ">
      <IndividualDetails
        nodes={nodes}
        rootId={rootId}
        collapseButton={() => setIsExpanded(!isExpanded)}
      />
    </FullMenu>
  ) : (
    <Button
      className="fixed bottom-10 bg-backgroundWhite text-primaryGreen py-3 px-6 shadow-sideMenuShadow rounded-l-none"
      onClick={() => setIsExpanded(!isExpanded)}
      title="0612 i Stamtavle 21"
    >
      <IoChevronBackCircle className="text-secondaryBrown ml-12 text-2xl" />
    </Button>
  );
};

export default SideMenu;
