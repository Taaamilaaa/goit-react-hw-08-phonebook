import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperation';

import styles from './userMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout);
 }
  return (
    <div className={styles.userContainer}>
      <p className={styles.notification}>Hello</p>
      <button
        type="button"
        onClick={onLogout}
        className={styles.button}
      >
        Logout
      </button>
    </div>
  );
};
