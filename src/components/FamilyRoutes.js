import { Route, Switch } from 'react-router-dom';
import UserFamilyTrees from './familyTreeList/UserFamilyTrees';
import UserIndividuals from './individualList/UserIndividuals';
import IndividualDetails from './individualDetails/IndividualDetails';

const FamilyRoutes = ({ path, trees, url, useNavigation }) => {
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <UserFamilyTrees
            trees={trees}
            url={url}
            useNavigation={useNavigation}
          />
        </Route>
        <Route exact path={`${path}/:treeIndex`}>
          <UserIndividuals
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
    </>
  );
};

export default FamilyRoutes;
