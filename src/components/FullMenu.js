import Button from './utilities/Button';
import { IoChevronBackCircle } from 'react-icons/io5';

const FullMenu = ({ children }) => {
  return (
    <main className="flex flex-col absolute overflow-y-hidden overflow-x-hidden w-full bg-backgroundWhite h-full top-16 rounded-t-xl shadow-logoShadow text-primaryGreen font-light pb-16">
      <section className="flex items-center bg-backgroundWhite px-4 py-3 rounded-t-xl shadow-lg text-sm">
        <Button className="bg-backgroundWhite shadow-none">
          <IoChevronBackCircle className="text-primaryGreen text-xl" />
        </Button>
        <p className="ml-3">0612 i Stamtavlen 21</p>
        <p className="ml-auto">Search Component</p>
      </section>
      <div className="h-full overflow-x-auto overflow-y-auto">{children}</div>
    </main>
  );
};

export default FullMenu;
