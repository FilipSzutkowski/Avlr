import { IoChevronBackCircle } from 'react-icons/io5';

const FullMenu = ({ children }) => {
  return (
    <main className="absolute overflow-x-hidden w-full bg-backgroundWhite top-16 h-full rounded-t-xl shadow-logoShadow text-primaryGreen font-light">
      <section className="flex items-center bg-backgroundWhite px-4 py-3 rounded-t-xl shadow-lg">
        <IoChevronBackCircle className="text-secondaryBrown text-xl" />
        <p className="ml-3">0612 i Stamtavlen 21</p>
        <p className="ml-auto">Search Component</p>
      </section>
      <div className="mt-4">{children}</div>
    </main>
  );
};

export default FullMenu;
