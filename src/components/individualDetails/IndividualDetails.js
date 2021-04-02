import DescriptionItem from './DescriptionItem';
import Button from '../utilities/Button';
import kanin from '../assets/kanin.jpg';
import { IoChevronForwardCircle } from 'react-icons/io5';

const IndividualDetails = ({ nodes, rootId, collapseButton }) => {
  const individualIndex = nodes.findIndex((node) => node.id === rootId);
  const individual = nodes[individualIndex];
  return (
    <article className="flex flex-col h-full mt-4">
      <section className="mx-4 flex flex-col">
        <img
          src={kanin}
          alt="Individet"
          className="rounded-full border-2 border-primaryGreen shadow-2xl w-32 sm:w-52 self-center"
        />
        <div className="flex flex-col">
          <Button
            title="Se i stamtreet"
            onClick={collapseButton}
            className="self-center my-4"
          >
            <IoChevronForwardCircle className="text-secondaryBrown ml-5 text-lg bg-backgroundWhite rounded-full" />
          </Button>
          <dl>
            <DescriptionItem
              title="Øremerke:"
              description={individual.earmark ?? 'Ikke oppgitt'}
            />
            <DescriptionItem
              title="Reg. Nr.:"
              description={individual.regNr ?? 'Ikke oppgitt'}
            />
            <DescriptionItem
              title="Rase:"
              description={individual.race ?? 'Ikke oppgitt'}
            />
            <DescriptionItem
              title="Født:"
              description={individual.birthday ?? 'Ikke oppgitt'}
            />
            <DescriptionItem
              title="Farge:"
              description={individual.color ?? 'Ikke oppgitt'}
            />
            <DescriptionItem
              title="Poeng:"
              description={individual.poeng ?? 'Ikke oppgitt'}
            />
          </dl>
        </div>
        <DescriptionItem
          title="Beskrivelse:"
          description={'Veldig sprek kanin, gode gener, god stamina'}
        />
      </section>
    </article>
  );
};

export default IndividualDetails;
