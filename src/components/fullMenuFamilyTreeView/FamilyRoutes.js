import { Route, Switch } from 'react-router-dom';
import FamilyTreeListContainer from './familyTreeList/FamilyTreeListContainer';
import IndividualListContainer from './individualList/IndividualsListContainer';
import IndividualDetails from './individualDetails/IndividualDetails';
import Loading from '../utilities/Loading';

const FamilyRoutes = ({ path, trees, url, useNavigation, loading }) => {
  return loading ? (
    <Loading />
  ) : trees ? (
    <Switch>
      <Route exact path={path}>
        <FamilyTreeListContainer
          trees={trees}
          url={url}
          useNavigation={useNavigation}
        />
      </Route>
      <Route exact path={`${path}/:treeIndex`}>
        <IndividualListContainer
          trees={trees}
          url={url}
          useNavigation={useNavigation}
        />
      </Route>
      <Route exact path={`${path}/:treeIndex/:individIndex`}>
        <IndividualDetails
          trees={trees}
          useNavigation={useNavigation}
          url={url}
        />
      </Route>
    </Switch>
  ) : (
    <div>Det oppstod en feil.</div>
  );
};

export default FamilyRoutes;
