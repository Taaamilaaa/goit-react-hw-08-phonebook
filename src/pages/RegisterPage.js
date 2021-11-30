import styles from './registerPage.module.css';
import { useState } from 'react';
import { useSignupUserMutation } from 'redux/auth/authSlice';

export const RegisterPage = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [taken, setToken] = useState('');

  const [signupUser] = useSignupUserMutation();

  const handleChangeName = e => setUserName(e.target.value);
  const handleChangeEmail = e => setUserEmail(e.target.value);
  const handleChangePassword = e => setUserPassword(e.target.value);

  const handleSubmitUser = e => {
    e.preventDefault();
    const user = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    signupUser(user).then(data => {
      console.log(data);
      const { data: userData } = data;

      setToken(userData.token);
    });

    reset();
  };
  const reset = () => {
    setUserName('');
    setUserEmail('');
    setUserPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmitUser} className={styles.form}>
        <label className={styles.label}>Enter your name</label>
        <input
          type="text"
          name="userName"
          value={userName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleChangeName}
          className={styles.input}
        />
        <label className={styles.label}>Enter your email</label>
        <input
          type="mail"
          name="userEmail"
          value={userEmail}
          required
          onChange={handleChangeEmail}
          className={styles.input}
        />
        <label className={styles.label}>Enter your password</label>
        <input
          type="text"
          name="userPassword"
          value={userPassword}
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
