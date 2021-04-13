import IndividualsList from './IndividualsList';
import { useParams } from 'react-router-dom';
import Button from '../../utilities/Button';
import { IoAddCircle } from 'react-icons/io5';
import { useState } from 'react';

const UserIndividuals = ({ trees, url, useNavigation }) => {
  const [addingIndivid, setAddingIndivid] = useState(false);
  const [previousUrl, setPreviousUrl] = useState(url);
  const { treeIndex } = useParams();
  const { treeData: tree, name } = trees[treeIndex];
  const [title, setTitle] = useState(name);
  const handleClick = () => {
    setPreviousUrl(`${url}/${treeIndex}`);
    setTitle('Nytt individ');
    setAddingIndivid(true);
  };
  useNavigation(previousUrl, title, false);
  return (
    <div className="flex flex-col divide-y divide-primaryGreen divide-opacity-50 h-full text-neutralDarkBrown">
      {addingIndivid ? (
        <form className="py-3 flex flex-col space-y-4">
          <label className="flex flex-col mx-2 text-primaryGreen font-normal">
            Øremarke:
            <input
              type="text"
              required={true}
              name="Øremarke"
              placeholder="0612"
            />
          </label>
          <Button className="rounded-none font-light py-3" type="submit">
            <IoAddCircle className="text-xl mr-3 text-secondaryBrown bg-backgroundWhite rounded-full" />
            Leg til nytt individ
          </Button>
        </form>
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
