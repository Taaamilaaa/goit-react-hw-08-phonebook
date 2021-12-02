
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNavigation } from './AuthNavigation/AuthNavigation';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {

  return (
    <>
      <Navigation />
      <UserMenu />
      <AuthNavigation />
      {/* {isAuth ? <UserMenu /> : <AuthNavigation />} */}
    </>
  );
};
