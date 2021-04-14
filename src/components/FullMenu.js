import { useEffect, useState } from 'react';
import Button from './utilities/Button';
import FamilyRoutes from './fullMenuFamilyTreeView/FamilyRoutes';
import { Link, useRouteMatch } from 'react-router-dom';
import { IoChevronBackCircle } from 'react-icons/io5';

const FullMenu = ({ loading, trees }) => {
  const { url, path } = useRouteMatch();
  const [navigation, setNavigation] = useState({
    url: '#',
    title: '',
    previousBtnHidden: true,
  });
  const useNavigation = (url, title, previousBtnHidden) => {
    useEffect(
      () =>
        setNavigation({
          url: url,
          title: title,
          previousBtnHidden: previousBtnHidden,
        }),
      [url, title, previousBtnHidden]
    );
  };
  return (
    <main className="flex flex-col absolute overflow-y-hidden overflow-x-hidden w-full bg-backgroundWhite h-full top-16 rounded-t-xl shadow-logoShadow text-primaryGreen font-light pb-16">
      <section className="flex items-center bg-backgroundWhite px-4 py-3 rounded-t-xl shadow-lg">
        <Link
          to={navigation.url}
          className={navigation.previousBtnHidden ? 'opacity-50' : null}
          disabled={navigation.previousBtnHidden}
        >
          <Button
            className="bg-backgroundWhite shadow-none px-0"
            disabled={navigation.previousBtnHidden}
          >
            <IoChevronBackCircle className="text-secondaryBrown text-xl" />
          </Button>
        </Link>
        <p className="ml-3">{navigation.title}</p>
      </section>
      <div className="h-full overflow-x-auto overflow-y-auto">
        <FamilyRoutes
          path={path}
          trees={trees}
          url={url}
          useNavigation={useNavigation}
          loading={loading}
        />
      </div>
    </main>
  );
};

export default FullMenu;
