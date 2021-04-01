import FullMenu from './FullMenu';
import Button from './utilities/Button';
import { Link } from 'react-router-dom';

const UserFamilyTrees = () => {
  return (
    <FullMenu>
      <div>
        <p className="text-xl">Heellooo</p>
        <Link to="/">
          <Button title="Go tilbake"></Button>
        </Link>
      </div>
    </FullMenu>
  );
};

export default UserFamilyTrees;
