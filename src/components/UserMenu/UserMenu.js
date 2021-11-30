import { NavLink } from "react-router-dom";
import styles from "./userMenu.module.css"
export const UserMenu = () => {
  return (
    <div className={styles.userMenu}>
      <ul className={styles.userMenuList}>
        <li >
          <NavLink to="/" className={styles.userMenuItem}>
            Home
          </NavLink>
        </li>
        <li >
          <NavLink to="/contacts" className={styles.userMenuItem}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};