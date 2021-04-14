import IndividualsList from './IndividualsList';
import { useParams } from 'react-router-dom';
import Button from '../../utilities/Button';
import { IoAddCircle } from 'react-icons/io5';
import { useState } from 'react';
import NewIndividualForm from './NewIndividualForm';

const UserIndividuals = ({ trees, url, useNavigation }) => {
  const [addingIndivid, setAddingIndivid] = useState(false);
  const [previousUrl, setPreviousUrl] = useState(url);
  const [formData, setFormData] = useState({});
  const { treeIndex } = useParams();
  const { treeData: tree, name } = trees[treeIndex];
  const [title, setTitle] = useState(name);

  const handleClick = () => {
    setPreviousUrl(`${url}/${treeIndex}`);
    setTitle('Nytt individ');
    setAddingIndivid(true);
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
    console.log('submit');
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
