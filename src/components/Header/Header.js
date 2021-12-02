
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNavigation } from './AuthNavigation/AuthNavigation';
import { Navigation } from './Navigation/Navigation';

export const Header = ({isAuth}) => {

  return (
    <>
      <Navigation isAuth={isAuth} />
   
      {isAuth ? <UserMenu /> : <AuthNavigation />}
    </>
  );
};
