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
      <form onSubmit={handleFormSubmit}>
        <label>Email:</label>
        <input
          type="mail"
          placeholder="email"
          required
          onChange={handleEmailChange}
        />
        <label>Password:</label>
        <input
          type="text"
          placeholder="password"
          required
          onChange={handlePasswordChange}
        />
        <button type="submit">Enter</button>
      </form>
    </>
  );
};
