import React, { useEffect, useRef } from 'react';
import { IoChevronDownCircle, IoPersonAdd } from 'react-icons/io5';
import { ReactComponent as LandingIllustration } from './assets/landingIcon.svg';
import { ReactComponent as FamiliesIllustration } from './assets/stamtavler.svg';
import { ReactComponent as InidividualsIllustration } from './assets/individer.svg';
import { ReactComponent as TreesIllustration } from './assets/trees.svg';
import { ReactComponent as Bubbles } from './assets/bubbles.svg';
import LogIn from './auth/LogIn';
import Button from './utilities/Button';
import { useLocation } from 'react-router';

const LandingPage = () => {
  const location = useLocation();
  const myRef = useRef(null);
  const footerRef = useRef(null);
  const executeScroll = (ref) => {
    window.scrollTo({
      top: ref?.current?.offsetTop ?? 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleClick = () => {
    executeScroll(myRef);
  };
  const illustrationClasses = 'w-32 h-auto';

  useEffect(() => {
    location.hash === '' && executeScroll();
    location.hash === '#om' && executeScroll(footerRef);
  });
  return (
    <>
      <main className="relative top-16 pb-2 flex flex-col md:max-w-screen-xl md:w-auto md:m-auto">
        <section className="md:relative flex justify-center landingSection h-vh md:p-8">
          <article className="flex flex-col md:flex-row items-center justify-around">
            <LandingIllustration className="max-w-xs md:max-w-md lg:max-w-lg h-auto md:pr-32" />
            <div className="flex flex-col md:items-end">
              <h1 className="text-3xl text-primaryGreen font-bold tracking-tight pb-2 md:text-right md:text-5xl">
                Vi hjelper <span className="text-secondaryBrown">deg</span> med
                å holde oversikt!
              </h1>
              <p className="font-light md:text-right">
                Avlr gjør det lett å holde orden på avlen din. Vi gir deg
                muligheten til å legge til, fjerne eller redigere detaljer om
                dyrene dine på en enkel måte!
              </p>
              <div className="flex space-x-6 py-6 self-start md:self-end">
                <Button className="bg-secondaryBrown" onClick={handleClick}>
                  Se mer
                  <IoChevronDownCircle className="text-backgroundWhite ml-3 text-lg" />
                </Button>
                <LogIn>
                  Ny konto
                  <IoPersonAdd className="text-backgroundWhite ml-3 text-lg" />
                </LogIn>
              </div>
            </div>
          </article>
          <Bubbles className="hidden md:block absolute bottom-0 left-0 opacity-80 max-w-md h-auto " />
        </section>
        <section
          ref={myRef}
          className="landingSection flex flex-col my-5 space-y-4"
        >
          <article className="flex flex-col items-center pt-8">
            <FamiliesIllustration className={illustrationClasses} />
            <h1 className="text-xl text-primaryGreen font-semibold self-start mt-3">
              Opprett <span className="text-secondaryBrown">stamtavler</span>!
            </h1>
            <p className="font-light self-start">
              Begynn med å opprette en ny stamtavle. Du kan selv velge hva du
              vil kalle den, og hvilken rase som skal bokføres.
            </p>
          </article>
          <article className="flex flex-col items-center pt-10">
            <InidividualsIllustration className={illustrationClasses} />
            <h1 className="text-xl text-primaryGreen font-semibold self-start mt-3">
              Legg til <span className="text-secondaryBrown">individer</span>!
            </h1>
            <p className="font-light self-start">
              Etter å ha opprettet en eller flere stamtavler, kan du legge til
              individer i en av de. Der kan du fylle ut detaljer og informasjon
              om individet, sånn som fødselsdato, farge eller
              registreringsnummer, samt foreldrene til individet.
            </p>
          </article>
          <article className="flex flex-col items-center pt-10">
            <TreesIllustration className={illustrationClasses} />
            <h1 className="text-xl text-primaryGreen font-semibold self-start mt-3">
              Beundre <span className="text-secondaryBrown">stamtreet</span>{' '}
              ditt!
            </h1>
            <p className="font-light self-start">
              Deretter kan du visualisere dataen om avlen din i et stamtre
              visning! Der ser du den nærmeste familien til individet sammen med
              deres detaljer. Da har du laget en enkel oversikt over egenskapene
              som går i familien!
            </p>
          </article>
        </section>
        <section className="landingSection">
          <h1 className="text-primaryGreen text-3xl text-center font-bold pb-4">
            Litt om Avlr
          </h1>
          <p className="font-light">
            Applikasjonen er i et <strong>teststadie</strong>, det vil si at det
            ikke er sikkert dataen brukeren fører inn ikke kommer til å bli
            fjernet. Det er derfor anbefalt å ikke utnytte verktøyet som den
            eneste måten å lagre data om avlen din på. <br /> Vi anbefaler
            allikevel å bruke applikasjonen, ettersom det er et nyttig verktøy!
          </p>
          <h1 className="text-secondaryBrown text-lg pt-3">Hva er Avlr?</h1>
          <p className="font-light">
            Avlr er en web basert applikasjon for å holde oversikt over
            stambokføring. Den er utført som et bachelorprosjekt på
            Multimediateknologi og Design studiet i Grimstad av Filip Piotr
            Szutkowski. <br /> <br />
            <strong>
              Har du noen spørsmål eller problemer? Send gjerne mail til
              filip99.ski@gmail.com
            </strong>
          </p>
        </section>
      </main>
      <footer
        className="relative -bottom-16 text-backgroundWhite font-light bg-primaryGreen pt-4 pb-2 text-center rounded-t-xl mt-8"
        ref={footerRef}
      >
        <p>
          Designet og utviklet av{' '}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/filip-szutkowski/"
            className="underline"
          >
            Filip Piotr Szutkowski
          </a>
          . <br /> &copy; 2021
        </p>
      </footer>
    </>
  );
};

export default LandingPage;
