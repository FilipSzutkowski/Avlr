import { IoAddCircle } from 'react-icons/io5';
import Button from '../../utilities/Button';

const NewIndividualForm = ({
  handleSubmit,
  handleChange,
  tree,
  error,
  editing,
}) => {
  const thisIndivid = tree[editing.individIndex];
  return (
    <>
      <form className="py-3 flex flex-col space-y-4" onSubmit={handleSubmit}>
        <label className="flex flex-col mx-2">
          Øremarke:
          <input
            type="text"
            required={false}
            name="earmark"
            placeholder={
              editing.status ? thisIndivid.earmark ?? 'Ikke oppgitt' : '0612'
            }
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col mx-2">
          Registrerings nummer*:
          <input
            type="text"
            required={true}
            maxLength={12}
            name="regNr"
            placeholder={
              editing.status
                ? thisIndivid.regNr ?? 'Ikke oppgitt'
                : 'Din egen måte å identifisere individet på, max 12 tegn.'
            }
            onChange={handleChange}
          />
          <span className="font-light text-secondaryBrown text-sm">
            Oppgi noe som gjør at du klarer å identifisere individet. Du kan
            skrive inn hva du vil.
          </span>
        </label>
        <label className="flex flex-col mx-2">
          Kjønn*:
          <div className="space-x-2">
            <input
              id="male"
              type="radio"
              required={true}
              name="gender"
              value="male"
              onChange={handleChange}
            />
            <label htmlFor="male">Han</label>
            <input
              id="female"
              type="radio"
              required={true}
              name="gender"
              value="female"
              onChange={handleChange}
            />
            <label htmlFor="female">Hun</label>
          </div>
        </label>
        <label className="flex flex-col mx-2">
          Fødselsdato:
          <input
            type="date"
            required={false}
            name="birthday"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col mx-2">
          Farge:
          <input
            type="text"
            required={false}
            name="color"
            placeholder="Svart otter"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col mx-2">
          Poeng:
          <input
            type="number"
            required={false}
            name="points"
            placeholder="Antall poeng"
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col mx-2">
          Beskrivelse:
          <input
            type="text"
            required={false}
            name="about"
            placeholder="Din egen beskrivelse av individet."
            onChange={handleChange}
          />
        </label>
        {editing.status ? (
          <p className="mx-2 text-secondaryBrown">
            Du kan dessverre ikke redigere foreldrene til individet for
            øyeblikket, beklager! Prøv å slette individet og legge det til på
            nytt med riktig foreldrene hvis det er tilfellet.
          </p>
        ) : (
          <label className="flex flex-col mx-2 space-y-4">
            Far og mor:
            <select name="father" onChange={handleChange}>
              <option value="">Far ikke oppgitt.</option>
              {tree.map((individ) =>
                individ.gender === 'male' ? (
                  <option key={individ.id} value={individ.id}>
                    {individ.regNr}
                  </option>
                ) : null
              )}
            </select>
            <select name="mother" onChange={handleChange}>
              <option value="">Mor ikke oppgitt.</option>
              {tree.map((individ) =>
                individ.gender === 'female' ? (
                  <option key={individ.id} value={individ.id}>
                    {individ.regNr}
                  </option>
                ) : null
              )}
            </select>
          </label>
        )}

        <label className="mx-2">
          Felt markert med * må fylles ut. La feltene du ikke vil fylle ut stå
          tomme.
        </label>
        <Button className="rounded-none font-light py-3" type="submit">
          <IoAddCircle className="text-xl mr-3 text-secondaryBrown bg-backgroundWhite rounded-full" />
          Lagre individet
        </Button>
        {error && (
          <p className="text-secondaryBrown">
            Det oppstod en feil: {error.message}
          </p>
        )}
      </form>
    </>
  );
};

export default NewIndividualForm;
