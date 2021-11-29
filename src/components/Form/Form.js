import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from './form.module.css';
import { notifySuccess, notifyWarning } from 'toaster/toaster';

import {
  useFetchContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsSlice';

const Form = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChangeName = e => setName(e.target.value);
  const handleChangeNumber = e => setPhone(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: uuid(),
      name: name,
      phone: phone,
    };

    const renderedNames = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase(),
    );
    if (renderedNames) {
      notifyWarning(`${newContact.name} is already on contacts`);
      setName('');
      setPhone('');
      return;
    }
    addContact(newContact);
    notifySuccess(`New contact ${newContact.name} is created`);
    setName('');
    setPhone('');
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
        value={phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        required
        onChange={handleChangeNumber}
      />
      <button className={styles.submitBtn} disabled={isLoading} type="submit">
        {isLoading && 'Create...'}
        {!isLoading && ' Add contact'}
      </button>
    </form>
  );
};

export default Form;
