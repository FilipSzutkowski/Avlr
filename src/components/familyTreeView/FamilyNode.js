import kanin from '../assets/kanin.jpg';
import GenderIcon from '../utilities/GenderIcon';

const FamilyNode = ({ node, style, isRoot }) => {
  return (
    <div className="absolute flex p-4" style={style}>
      <article
        className={`relative flex flex-col flex-1 border-neutralDarkBrown rounded-md items-center bg-cardYellow shadow-lg p-2 ${
          isRoot && 'border-2'
        }`}
      >
        <img
          src={kanin}
          alt="kanin"
          className="relative -top-5 rounded-full w-16 border-primaryGreen border-2"
        />
        <div className="flex items-center space-x-2 -mt-5">
          <h1 className="text-lg">{node.regNr}</h1>
          <GenderIcon gender={node.gender} className="text-xl" />
        </div>
        <p className="text-sm opacity-80">
          {node.birthday ?? 'Ingen fødselsdato'}
        </p>
        <p className="text-sm opacity-80">
          {node.color ?? 'Farge ikke oppgitt'}
        </p>
        <p>{node.race ?? 'Ingen rase'}</p>
      </article>
    </div>
  );
};

export default FamilyNode;
