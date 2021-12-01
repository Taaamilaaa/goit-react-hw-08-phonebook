import { NavLink } from 'react-router-dom';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNavigation } from './AuthNavigation/AuthNavigation';
import styles from './header.module.css';

export const Header = ({ isAuth }) => {
  return (
    <>
      <div className={styles.header}>
        <ul className={styles.headerList}>
          <li>
            <NavLink to="/" className={styles.headerItem}>
              Home
            </NavLink>
          </li>
          {isAuth && (
            <li>
              <NavLink to="/contacts" className={styles.headerItem}>
                Contacts
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      {isAuth ? <UserMenu /> : <AuthNavigation />}
    </>
  );
};
