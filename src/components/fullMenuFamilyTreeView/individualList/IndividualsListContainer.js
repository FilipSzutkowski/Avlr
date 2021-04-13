import IndividualsList from './IndividualsList';
import { useParams } from 'react-router-dom';
import Button from '../../utilities/Button';
import { IoAddCircle } from 'react-icons/io5';
import { useState } from 'react';

const UserIndividuals = ({ trees, url, useNavigation }) => {
  const [addingIndivid, setAddingIndivid] = useState(true);
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
          <label className="flex flex-col mx-2">
            Øremarke:
            <input
              type="text"
              required={false}
              name="øremarke"
              placeholder="0612"
            />
          </label>
          <label className="flex flex-col mx-2">
            Registrerings nummer*:
            <input
              type="text"
              required={true}
              name="regNr"
              placeholder="Ditt eget valg"
            />
          </label>
          <label className="flex flex-col mx-2">
            Kjønn*:
            <div className="space-x-2">
              <input id="male" type="radio" required={true} name="gender" />
              <label htmlFor="male">Han</label>
              <input id="female" type="radio" required={true} name="gender" />
              <label htmlFor="female">Hun</label>
            </div>
          </label>
          <label className="flex flex-col mx-2">
            Fødselsdato:
            <input
              type="date"
              required={false}
              name="birthday"
              placeholder="Ditt eget valg"
            />
          </label>
          <label className="flex flex-col mx-2">
            Farge:
            <input
              type="text"
              required={false}
              name="color"
              placeholder="Ditt eget valg"
            />
          </label>
          <label className="flex flex-col mx-2">
            Poeng:
            <input
              type="number"
              required={false}
              name="points"
              placeholder="Antall poeng"
            />
          </label>
          <label className="flex flex-col mx-2">
            Beskrivelse:
            <input
              type="text"
              required={false}
              name="about"
              placeholder="Din egen beskrivelse av individet."
            />
          </label>
          <label className="flex flex-col mx-2">
            Foreldrene:
            <select>
              <option value="">Far ikke oppgitt.</option>
              {tree.map((individ, index) => (
                <option key={individ.id} value={index}>
                  {individ.regNr}
                </option>
              ))}
            </select>
            <select>
              <option value="">Mor ikke oppgitt.</option>
              {tree.map((individ, index) => (
                <option key={individ.id} value={index}>
                  {individ.regNr}
                </option>
              ))}
            </select>
          </label>
          <label className="mx-2">Felt markert med * må fylles ut.</label>
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
