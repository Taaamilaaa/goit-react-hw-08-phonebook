import { NavLink } from 'react-router-dom';
import styles from "./navigation.module.css";
export const Navigation = () => {
  return (
    <>
      <div className={styles.header}>
        <ul className={styles.headerList}>
          <li>
            <NavLink to="/" className={styles.headerItem}>
              Home
            </NavLink>
          </li>
          
            <li>
              <NavLink to="/contacts" className={styles.headerItem}>
                Contacts
              </NavLink>
            </li>
          
        </ul>
      </div>
      
    </>
  );
};