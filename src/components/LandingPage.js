import React from 'react';
import { IoChevronDownCircle, IoPersonAdd } from 'react-icons/io5';
import { ReactComponent as LandingIllustration } from './assets/landingIcon.svg';
import Button from './utilities/Button';

const LandingPage = () => {
  return (
    <div className="relative top-16 shadow-sideMenuShadow px-4 py-6 mx-1 rounded-md">
      <section className="flex items-center flex-col space-y-4">
        <LandingIllustration className="w-52 h-auto" />
        <h1 className="text-3xl text-primaryGreen font-bold tracking-tight">
          Vi hjelper <span className="text-secondaryBrown">deg</span> med å
          holde oversikt!
        </h1>
        <p className=" font-light">
          Avlr gjør det lett å holde orden på avlen din. Vi gjør det mulig å
          legge til, fjerne eller redigere detaljer om dyrene dine på en enkel
          måte!
        </p>
        <div className="flex space-x-6 py-6 self-start">
          <Button className="bg-secondaryBrown font-light">
            Se mer
            <IoChevronDownCircle className="text-backgroundWhite ml-3 text-lg" />
          </Button>
          <Button className="font-light">
            Ny konto
            <IoPersonAdd className="text-backgroundWhite ml-3 text-lg" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
