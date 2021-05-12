import IndividualsList from './IndividualsList';
import { useParams } from 'react-router-dom';
import Button from '../../utilities/Button';
import { IoAddCircle } from 'react-icons/io5';
import { useContext, useState } from 'react';
import NewIndividualForm from './NewIndividualForm';
import TreeContext from '../../TreeContext';
import { useForm } from '../useForm';
import {
  POSTnewIndividual,
  DELETEindividual,
  EDITIndivid,
} from '../../APICalls';
import { useAuth0 } from '@auth0/auth0-react';

const UserIndividuals = ({ url, useNavigation }) => {
  const { familyTrees, setFamilyTrees } = useContext(TreeContext);
  const { getAccessTokenSilently, user } = useAuth0();
  const [addingIndivid, setAddingIndivid] = useState(false);
  const [previousUrl, setPreviousUrl] = useState(url);
  const [editingIndivid, setEditingIndivid] = useState({
    status: false,
    individIndex: null,
  });
  const [formData, handleChange] = useForm({
    parents: [],
    siblings: [],
    spouses: [],
    children: [],
  });
  const [error, setError] = useState(null);
  const { treeIndex } = useParams();
  const { treeData: tree, name, id: treeId } = familyTrees[treeIndex];
  const [title, setTitle] = useState(name);
  const handleClick = () => {
    setPreviousUrl(`${url}/${treeIndex}`);
    setTitle('Nytt individ');
    setAddingIndivid(true);
  };

  const handleDelete = async (e) => {
    const individIndex = e.currentTarget.id;
    const accessToken = await getAccessTokenSilently();
    const result = await DELETEindividual(
      treeIndex,
      individIndex,
      accessToken,
      user.sub
    );
    if (result instanceof Error) {
      setError(result);
      return;
    }
    setFamilyTrees(result);
  };

  const handleEdit = (e) => {
    const individIndex = e.currentTarget.id;
    const { regNr } = tree[individIndex];
    setPreviousUrl(`${url}/${treeIndex}`);
    setTitle(`Redigerer: ${regNr}`);
    setEditingIndivid({ status: true, individIndex: individIndex });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const accessToken = await getAccessTokenSilently();
    const newIndividual = { ...formData };
    const result = await EDITIndivid(
      newIndividual,
      editingIndivid.individIndex,
      treeIndex,
      accessToken,
      user.sub
    );

    if (result instanceof Error) {
      setError(result);
      return;
    }
    setFamilyTrees(result);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = await getAccessTokenSilently();
    const newIndividual = { ...formData };
    const result = await POSTnewIndividual(
      newIndividual,
      treeId,
      accessToken,
      user.sub
    );
    if (result instanceof Error) {
      setError(result);
      return;
    }
    setAddingIndivid(false);
    setFamilyTrees(result);
  };
  useNavigation(previousUrl, title, false);
  return (
    <div className="flex flex-col divide-y divide-primaryGreen divide-opacity-50 h-full text-neutralDarkBrown">
      {addingIndivid || editingIndivid.status ? (
        <NewIndividualForm
          handleChange={handleChange}
          handleSubmit={editingIndivid.status ? handleEditSubmit : handleSubmit}
          editing={editingIndivid}
          tree={tree}
          error={error}
        />
      ) : (
        <>
          <IndividualsList
            tree={tree}
            treeIndex={treeIndex}
            url={url}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
          <Button
            className="rounded-none font-light py-3"
            onClick={handleClick}
          >
            <IoAddCircle className="text-xl mr-3 text-secondaryBrown bg-backgroundWhite rounded-full" />
            Legg til nytt individ
          </Button>
        </>
      )}
    </div>
  );
};

export default UserIndividuals;
