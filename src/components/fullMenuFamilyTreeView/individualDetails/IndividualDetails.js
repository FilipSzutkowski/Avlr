import { useParams, Link } from 'react-router-dom';
import DescriptionItem from './DescriptionItem';
import Button from '../../utilities/Button';
import kanin from '../../assets/kanin.jpg';
import { IoChevronForwardCircle } from 'react-icons/io5';
import { useContext } from 'react';
import TreeContext from '../../TreeContext';

const IndividualDetails = ({ useNavigation, url }) => {
  const { familyTrees } = useContext(TreeContext);
  const { treeIndex, individIndex } = useParams();
  const { earmark, regNr, race, birthday, color, points, about } = familyTrees[
    treeIndex
  ].treeData[individIndex];
  useNavigation(`${url}/${treeIndex}`, regNr, false);
  return (
    <article className="flex flex-col h-full mt-4">
      <section className="mx-4 flex flex-col">
        <img
          src={kanin}
          alt="Individet"
          className="rounded-full border-2 border-primaryGreen shadow-2xl w-32 sm:w-52 self-center"
        />
        <div className="flex flex-col">
          <Link
            to={`/tree/${treeIndex}/${individIndex}`}
            className="self-center my-4"
          >
            <Button>
              Se i stamtreet
              <IoChevronForwardCircle className="text-secondaryBrown ml-5 text-lg bg-backgroundWhite rounded-full" />
            </Button>
          </Link>
          <dl>
            <DescriptionItem
              title="Øremerke:"
              description={earmark ?? 'Ikke oppgitt'}
            />
            <DescriptionItem
              title="Reg. Nr.:"
              description={regNr ?? 'Ikke oppgitt'}
            />
            <DescriptionItem
              title="Rase:"
              description={race ?? 'Ikke oppgitt'}
            />
            <DescriptionItem
              title="Født:"
              description={birthday ?? 'Ikke oppgitt'}
            />
            <DescriptionItem
              title="Farge:"
              description={color ?? 'Ikke oppgitt'}
            />
            <DescriptionItem
              title="Poeng:"
              description={points ?? 'Ikke oppgitt'}
            />
          </dl>
        </div>
        <DescriptionItem
          title="Beskrivelse:"
          description={about ?? 'Ikke oppgitt'}
        />
      </section>
    </article>
  );
};

export default IndividualDetails;
