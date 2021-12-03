import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './form.module.css';
import { notifySuccess, notifyWarning } from 'toaster/toaster';
import { addContactThunk } from 'redux_/contacts/contacts-thunks';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.cont);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const dispatch = useDispatch();

  const handleChangeName = e => setName(e.target.value);
  const handleChangeNumber = e => setNumber(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    const renderedName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
    if (renderedName) {
      notifyWarning(`${name} is already on contacts`);
      setName('');
      setNumber('');
      return;
    }
    dispatch(addContactThunk({ name: name, number: number }));
    notifySuccess(`New contact ${name} is created`);
    setName('');
    setNumber('');
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Name:</label>
      <input
        className={styles.input}
        type="text"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        onChange={handleChangeName}
      />
      <label className={styles.label}>Number:</label>
      <input
        className={styles.input}
        type="tel"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        required
        onChange={handleChangeNumber}
      />
      <button className={styles.submitBtn} type="submit">
        {isLoading && 'Create...'}
        {!isLoading && ' Add contact'}
      </button>
    </form>
  );
};

export default Form;
