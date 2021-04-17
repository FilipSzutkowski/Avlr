import { Route, Switch } from 'react-router-dom';
import FamilyTreeListContainer from './familyTreeList/FamilyTreeListContainer';
import IndividualListContainer from './individualList/IndividualsListContainer';
import IndividualDetails from './individualDetails/IndividualDetails';
import Loading from '../utilities/Loading';
import TreeContext from '../TreeContext';
import { useContext } from 'react';

const FamilyRoutes = ({ path, url, useNavigation, loading }) => {
  const { familyTrees } = useContext(TreeContext);
  return loading ? (
    <Loading />
  ) : familyTrees ? (
    <Switch>
      <Route exact path={path}>
        <FamilyTreeListContainer url={url} useNavigation={useNavigation} />
      </Route>
      <Route exact path={`${path}/:treeIndex`}>
        <IndividualListContainer url={url} useNavigation={useNavigation} />
      </Route>
      <Route exact path={`${path}/:treeIndex/:individIndex`}>
        <IndividualDetails useNavigation={useNavigation} url={url} />
      </Route>
    </Switch>
  ) : (
    <div>Det oppstod en feil.</div>
  );
};

export default FamilyRoutes;
