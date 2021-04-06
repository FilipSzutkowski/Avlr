//import picture from './assets/kanin.png';

const FamilyNode = ({ node, style, isRoot }) => {
  return (
    <div className="absolute flex p-2" style={style}>
      <article
        className={`flex flex-col flex-1 border-neutralDarkBrown rounded-md items-center bg-cardYellow p-2 ${
          isRoot && 'border-2'
        }`}
      >
        <h1>{node.id}</h1>
        <p>{node.gender}</p>
        <p>{node.birthday}</p>
        <p>{node.color}</p>
        <p>{node.race}</p>
      </article>
    </div>
  );
};

export default FamilyNode;
