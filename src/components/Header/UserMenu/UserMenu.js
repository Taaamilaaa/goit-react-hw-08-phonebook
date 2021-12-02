import styles from './userMenu.module.css';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux_/auth/thunks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <div className={styles.userContainer}>
      <p className={styles.notification}>Hello</p>
      <button type="button" onClick={handleLogout} className={styles.button}>
        Logout
      </button>
    </div>
  );
};
