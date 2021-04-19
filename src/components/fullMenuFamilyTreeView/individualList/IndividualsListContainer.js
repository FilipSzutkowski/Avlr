import IndividualsList from './IndividualsList';
import { useParams } from 'react-router-dom';
import Button from '../../utilities/Button';
import { IoAddCircle } from 'react-icons/io5';
import { useContext, useState } from 'react';
import NewIndividualForm from './NewIndividualForm';
import TreeContext from '../../TreeContext';
import { useForm } from '../useForm';
import { POSTnewIndividual } from '../../APICalls';

const UserIndividuals = ({ url, useNavigation }) => {
  const { familyTrees, setFamilyTrees } = useContext(TreeContext);
  const [addingIndivid, setAddingIndivid] = useState(false);
  const [previousUrl, setPreviousUrl] = useState(url);
  const [formData, handleChange] = useForm({});
  const [error, setError] = useState(null);
  const { treeIndex } = useParams();
  const { treeData: tree, name, id: treeId } = familyTrees[treeIndex];
  const [title, setTitle] = useState(name);
  const handleClick = () => {
    setPreviousUrl(`${url}/${treeIndex}`);
    setTitle('Nytt individ');
    setAddingIndivid(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newIndividual = { ...formData };
    const result = await POSTnewIndividual(newIndividual, treeId);
    if (result instanceof Error) {
      setError(result);
      return;
    }
    console.log(formData);
    setAddingIndivid(false);
    setFamilyTrees(result);
  };
  useNavigation(previousUrl, title, false);
  return (
    <div className="flex flex-col divide-y divide-primaryGreen divide-opacity-50 h-full text-neutralDarkBrown">
      {addingIndivid ? (
        <NewIndividualForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          tree={tree}
        />
      ) : (
        <>
          <IndividualsList tree={tree} treeIndex={treeIndex} url={url} />
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
