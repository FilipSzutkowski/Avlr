import FamilyTreeList from './FamilyTreeList';
import Button from '../../utilities/Button';
import { IoAddCircle } from 'react-icons/io5';
import { useContext, useState } from 'react';
import TreeContext from '../../TreeContext';
import { useForm } from '../useForm';
import { POSTnewFamilyTree, DELETEtree, EDITtree } from '../../APICalls';
import { useAuth0 } from '@auth0/auth0-react';

const UserFamilyTrees = ({ url, useNavigation }) => {
  const [addingTree, setAddingTree] = useState(false);
  const [editingTree, setEditingTree] = useState({
    status: false,
    treeIndex: null,
  });
  const [formData, handleChange] = useForm({});
  const [title, setTitle] = useState('Stamtavler');
  const [error, setError] = useState(null);
  const { familyTrees, setFamilyTrees } = useContext(TreeContext);
  const { getAccessTokenSilently, user } = useAuth0();
  const handleClick = () => {
    setTitle('Ny stamtavle');
    setAddingTree(true);
  };

  const handleDelete = async (e) => {
    const treeIndex = e.currentTarget.id;
    const accessToken = await getAccessTokenSilently();
    const result = await DELETEtree(treeIndex, accessToken, user.sub);
    if (result instanceof Error) {
      setError(result);
      return;
    }
    console.log(result);
    setFamilyTrees(result);
  };

  const handleEdit = (e) => {
    const treeIndex = e.currentTarget.id;
    setTitle('Rediger stamtavlen');
    setEditingTree({ status: true, treeIndex: parseInt(treeIndex) });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const accessToken = await getAccessTokenSilently();
    const newFamilyTree = { ...formData };
    const result = await EDITtree(
      newFamilyTree,
      editingTree.treeIndex,
      accessToken,
      user.sub
    );
    if (result instanceof Error) {
      setError(result);
      return;
    }
    setEditingTree({ status: false, treeIndex: null });
    setFamilyTrees(result);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = await getAccessTokenSilently();
    const newFamilyTree = { ...formData };
    const result = await POSTnewFamilyTree(
      newFamilyTree,
      accessToken,
      user.sub
    );
    if (result instanceof Error) {
      setError(result);
      return;
    }
    setAddingTree(false);
    setFamilyTrees(result);
  };
  useNavigation(url, title, !addingTree && !editingTree.status);
  return (
    <div className="flex flex-col divide-y divide-primaryGreen divide-opacity-50 h-full text-neutralDarkBrown">
      {addingTree || editingTree.status ? (
        <form
          className="py-3 flex flex-col space-y-4"
          onSubmit={editingTree.status ? handleEditSubmit : handleSubmit}
        >
          <label className="flex flex-col mx-2 text-primaryGreen font-normal">
            Navn:
            <input
              type="text"
              required={true}
              name="name"
              placeholder={
                editingTree.status
                  ? familyTrees[editingTree.treeIndex].name
                  : 'Dvergveddere høst 2020'
              }
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col mx-2 text-primaryGreen font-normal">
            Rase:
            <input
              type="text"
              required={true}
              name="race"
              placeholder={
                editingTree.status
                  ? familyTrees[editingTree.treeIndex].race
                  : 'Dvergveddere'
              }
              onChange={handleChange}
            />
          </label>
          <Button className="rounded-none font-light py-3" type="submit">
            <IoAddCircle className="text-xl mr-3 text-secondaryBrown bg-backgroundWhite rounded-full" />
            Lagre
          </Button>
          {error && (
            <p className="text-secondaryBrown">
              Det oppstod en feil: {error.message}
            </p>
          )}
        </form>
      ) : (
        <>
          <FamilyTreeList
            trees={familyTrees}
            url={`${url}`}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
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
