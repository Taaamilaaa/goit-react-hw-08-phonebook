import styles from './registerPage.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux_/auth/thunks';



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
    const user = { name, email, password };
    dispatch(registerThunk(user));
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmitUser} className={styles.form}>
        <label className={styles.label}>Please, register:</label>
        <input
          type="text"
          name="userName"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleChangeName}
          className={styles.input}
          placeholder = "name"
        />
        
        <input
          type="mail"
          name="userEmail"
          value={email}
          required
          onChange={handleChangeEmail}
          className={styles.input}
          placeholder = "email"
        />
        
        <input
          type="text"
          name="userPassword"
          value={password}         
          required
          onChange={handleChangePassword}
          className={styles.input}
          placeholder = "password"
        />
        <button type="submit" className={styles.submitBtn}>
          Register
        </button>
      </form>
    </>
  );
};
