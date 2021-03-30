import DescriptionItem from './DescriptionItem';
import kanin from './assets/kanin.jpg';
import { IoChevronForwardCircle } from 'react-icons/io5';

const IndividualDetails = ({ nodes, rootId, collapseButton }) => {
  const individualIndex = nodes.findIndex((node) => node.id === rootId);
  const individual = nodes[individualIndex];
  return (
    <article className="overflow-y-scroll overflow-x-hidden">
      <section className="grid grid-cols-2 place-items-center mx-4">
        <button
          className="col-span-2 flex flex-nowrap items-center py-2 px-3 rounded-lg text-backgroundWhite shadow-md bg-primaryGreen"
          onClick={collapseButton}
        >
          <span>Se i generasjonstreet</span>
          <IoChevronForwardCircle className="text-secondaryBrown ml-5 text-lg" />
        </button>
        <img
          src={kanin}
          alt="Bildet av individet"
          className="rounded-full border-2 border-primaryGreen shadow-2xl w-32 sm:w-52"
        />
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
        <DescriptionItem
          title="Beskrivelse:"
          description={'Veldig sprek kanin, gode gener, god stamina'}
          className="col-span-2 sm:col-span-1"
        />
      </section>
    </article>
  );
};

export default IndividualDetails;
