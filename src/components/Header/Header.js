
import { UserMenu } from './UserMenu';
import { AuthNavigation } from './AuthNavigation';
import { Navigation } from './Navigation';

export const Header = ({isAuth}) => { 
  return (
    <>
      <Navigation isAuth={isAuth} />
      {isAuth ? <UserMenu /> : <AuthNavigation />}
    </>
  );
};
