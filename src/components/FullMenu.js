import { useState } from 'react';
import Button from './utilities/Button';
import UserFamilyTrees from './UserFamilyTrees';
import UserIndividuals from './UserIndividuals';
import IndividualDetails from './individualDetails/IndividualDetails';
import Loading from './utilities/Loading';
import { Link, Switch, useRouteMatch, Route } from 'react-router-dom';
import { IoChevronBackCircle } from 'react-icons/io5';

const FullMenu = ({ loading, trees }) => {
  const { url, path } = useRouteMatch();
  const [title, setTitle] = useState('Mine Stamtavler');
  return (
    <main className="flex flex-col absolute overflow-y-hidden overflow-x-hidden w-full bg-backgroundWhite h-full top-16 rounded-t-xl shadow-logoShadow text-primaryGreen font-light pb-16">
      <section className="flex items-center bg-backgroundWhite px-4 py-3 rounded-t-xl shadow-lg">
        <Link to="/mine_stamtavler">
          <Button className="bg-backgroundWhite shadow-none px-0">
            <IoChevronBackCircle className="text-secondaryBrown text-xl" />
          </Button>
        </Link>
        <p className="ml-3">{title}</p>
        <p className="ml-auto">Search Component</p>
      </section>
      <div className="h-full overflow-x-auto overflow-y-auto">
        {loading ? (
          <Loading />
        ) : trees ? (
          <Switch>
            <Route exact path={path}>
              <UserFamilyTrees trees={trees} url={url} />
            </Route>
            <Route exact path={`${path}/:treeIndex`}>
              <UserIndividuals trees={trees} url={url} titleChange={setTitle} />
            </Route>
            <Route exact path={`${path}/:treeIndex/:individIndex`}>
              <IndividualDetails trees={trees} url={url} />
            </Route>
          </Switch>
        ) : (
          <div>Det oppstod en feil. Prøv igjen.</div>
        )}
      </div>
    </main>
  );
};

export default FullMenu;
