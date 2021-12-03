import styles from './pages.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux_/auth/thunks';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
    
  const handleFormSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }));
    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <label className={styles.label}>Enter your data:</label>
        <input
          type="mail"
          placeholder="email"
          required
          onChange={handleEmailChange}
          className={styles.input}
        />
        <label></label>
        <input
          type="text"
          placeholder="password"
          required
          onChange={handlePasswordChange}
          className={styles.input}
        />
        <button type="submit" className={styles.submitBtn}>Enter</button>
      </form>
    </>
  );
};
