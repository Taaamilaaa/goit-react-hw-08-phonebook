import styles from './header.module.css';
import { useDispatch } from 'react-redux';
import { logoutThunk } from 'redux_/auth/thunks';
import { useSelector } from 'react-redux';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  return (
    <div className={styles.userContainer}>
      <p className={styles.notification}>Hello {name}!!!</p>
      <button type="button" onClick={handleLogout} className={styles.button}>
        Logout
      </button>
    </div>
  );
};
