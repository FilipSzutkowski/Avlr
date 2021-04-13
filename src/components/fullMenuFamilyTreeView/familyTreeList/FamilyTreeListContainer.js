import FamilyTreeList from './FamilyTreeList';
import Button from '../../utilities/Button';
import { IoAddCircle } from 'react-icons/io5';
import { useState } from 'react';

const UserFamilyTrees = ({ trees, url, useNavigation }) => {
  const [addingTree, setAddingTree] = useState(false);
  const [title, setTitle] = useState('Stamtavler');
  const handleClick = () => {
    setTitle('Ny stamtavle');
    setAddingTree(true);
  };
  useNavigation(url, title, !addingTree);
  return (
    <div className="flex flex-col divide-y divide-primaryGreen divide-opacity-50 h-full text-neutralDarkBrown">
      {addingTree ? (
        <form className="py-3 flex flex-col space-y-4">
          <label className="flex flex-col mx-2 text-primaryGreen font-normal">
            Navn:
            <input
              type="text"
              required={true}
              name="Stamtavle"
              placeholder="Mine dvergveddere"
            />
          </label>
          <Button className="rounded-none font-light py-3" type="submit">
            <IoAddCircle className="text-xl mr-3 text-secondaryBrown bg-backgroundWhite rounded-full" />
            Opprett ny stamtavle
          </Button>
        </form>
      ) : (
        <>
          <FamilyTreeList trees={trees} url={`${url}`} />
          <Button
            className="rounded-none font-light py-3"
            onClick={handleClick}
          >
            <IoAddCircle className="text-xl mr-3 text-secondaryBrown bg-backgroundWhite rounded-full" />
            Opprett ny stamtavle
          </Button>
        </>
      )}
    </div>
  );
};

export default UserFamilyTrees;
