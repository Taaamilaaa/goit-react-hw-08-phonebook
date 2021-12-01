import styles from './userMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={styles.userContainer}>
      <p className={styles.notification}>Hello</p>
      <button
        type="button"
        // onClick={onLogout}
        className={styles.button}
      >
        Logout
      </button>
    </div>
  );
};