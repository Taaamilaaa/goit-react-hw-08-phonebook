import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './form.module.css';
import { notifySuccess, notifyWarning } from 'toaster/toaster';
import {addContactThunk} from "redux_/contacts/contacts-thunks"
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from 'redux_/contacts/contactsSlice';

const Form = () => {
  const { data: contacts } = useFetchContactsQuery();
  // const [addContact, { isLoading }] = useAddContactMutation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = e => setName(e.target.value);
  const handleChangeNumber = e => setNumber(e.target.value);
  
  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
     
      "name": name,
      "number":number,
    };

    if (contacts) {
      const renderedNames = contacts.find(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase(),
    );
    if (renderedNames) {
      notifyWarning(`${newContact.name} is already on contacts`);
      setName('');
      setNumber('');
      return;
    }
    } else {
    dispatch(addContactThunk(newContact));
    notifySuccess(`New contact ${newContact.name} is created`);
    setName('');
    setNumber('');}
// //already add
//     const renderedNames = contacts.find(
//       ({ name }) => name.toLowerCase() === newContact.name.toLowerCase(),
//     );
//     if (renderedNames) {
//       notifyWarning(`${newContact.name} is already on contacts`);
//       setName('');
//       setPhone('');
//       return;
//     }
//     /// add
//     addContact(newContact);
//     notifySuccess(`New contact ${newContact.name} is created`);
//     setName('');
//     setPhone('');
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
      <button className={styles.submitBtn}  type="submit">
        {/* {isLoading && 'Create...'}
        {!isLoading && ' Add contact'} */}
      </button>
    </form>
  );
};

export default Form;
