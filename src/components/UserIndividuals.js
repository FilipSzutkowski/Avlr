import Loading from './utilities/Loading';
import { Link, useParams, useRouteMatch } from 'react-router-dom';
import { useState } from 'react';

const UserIndividuals = ({ trees, loading, url }) => {
  const { treeId } = useParams();
  const indexOfTree = !loading && trees.findIndex((tree) => tree.id == treeId);
  const tree = !loading && trees[indexOfTree].treeData;
  return loading ? (
    <Loading />
  ) : tree ? (
    <div className="flex flex-col divide-y divide-primaryGreen divide-opacity-50 h-full text-neutralDarkBrown">
      {tree.map(({ id, earmark }) => (
        <Link
          to={`#`}
          key={id}
          className="flex py-3 hover:bg-secondaryBrown hover:text-backgroundWhite"
        >
          <span className="mx-3">{earmark ?? 'Ikke noe øremarke'}</span>
        </Link>
      ))}
    </div>
  ) : (
    <p>Det har oppstått en feil.</p>
  );
};

export default UserIndividuals;
