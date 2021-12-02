
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNavigation } from './AuthNavigation/AuthNavigation';
import { Navigation } from './Navigation/Navigation';
// import styles from './header.module.css';

export const Header = ({ isAuth }) => {
  return (
    <>
      <Navigation />
      <UserMenu />
      <AuthNavigation />
      {/* {isAuth ? <UserMenu /> : <AuthNavigation />} */}
    </>
  );
};
