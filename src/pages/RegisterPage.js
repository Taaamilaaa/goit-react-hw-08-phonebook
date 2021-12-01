import styles from './registerPage.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';



export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  
  const handleChangeName = e => setName(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmitUser = e => {
    e.preventDefault();
    
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmitUser} className={styles.form}>
        <label className={styles.label}>Enter your name</label>
        <input
          type="text"
          name="userName"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleChangeName}
          className={styles.input}
        />
        <label className={styles.label}>Enter your email</label>
        <input
          type="mail"
          name="userEmail"
          value={email}
          required
          onChange={handleChangeEmail}
          className={styles.input}
        />
        <label className={styles.label}>Enter your password</label>
        <input
          type="text"
          name="userPassword"
          value={password}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleChangePassword}
          className={styles.input}
        />
        <button type="submit" className={styles.submitBtn}>
          Register
        </button>
      </form>
    </>
  );
};
