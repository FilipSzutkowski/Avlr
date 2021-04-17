import FamilyTreeList from './FamilyTreeList';
import Button from '../../utilities/Button';
import { IoAddCircle } from 'react-icons/io5';
import { useContext, useState } from 'react';
import TreeContext from '../../TreeContext';

const UserFamilyTrees = ({ url, useNavigation }) => {
  const [addingTree, setAddingTree] = useState(false);
  const [formData, setFormData] = useState({});
  const [title, setTitle] = useState('Stamtavler');
  const { familyTrees, setFamilyTrees } = useContext(TreeContext);
  const handleClick = () => {
    setTitle('Ny stamtavle');
    setAddingTree(true);
  };
  const handleChange = (e) => {
    const target = e.target;
    const { value, name } = target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = familyTrees.length + 1;
    const newFamilyTree = { id, ...formData, treeData: [] };
    setFamilyTrees([...familyTrees, newFamilyTree]);
  };
  useNavigation(url, title, !addingTree);
  return (
    <div className="flex flex-col divide-y divide-primaryGreen divide-opacity-50 h-full text-neutralDarkBrown">
      {addingTree ? (
        <form className="py-3 flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label className="flex flex-col mx-2 text-primaryGreen font-normal">
            Navn:
            <input
              type="text"
              required={true}
              name="name"
              placeholder="Mine dvergveddere"
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col mx-2 text-primaryGreen font-normal">
            Rase:
            <input
              type="text"
              required={true}
              name="race"
              placeholder="Mine dvergveddere"
              onChange={handleChange}
            />
          </label>
          <Button className="rounded-none font-light py-3" type="submit">
            <IoAddCircle className="text-xl mr-3 text-secondaryBrown bg-backgroundWhite rounded-full" />
            Lagre
          </Button>
        </form>
      ) : (
        <>
          <FamilyTreeList trees={familyTrees} url={`${url}`} />
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
