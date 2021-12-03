import { NavLink } from 'react-router-dom';
import styles from './header.module.css';

export const AuthNavigation = () => {
  return (
    <div className={styles.navigation}>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <NavLink to="/login"  className={styles.link}>
            Login
          </NavLink>
        </li>
        <li className={styles.listItem}>
          <NavLink to="/register" className={styles.link}>
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
