import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container } from 'components/Container/Container';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContactsThunk } from 'redux_/contacts/contacts-thunks';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.cont);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  const onFilterChange = value => {
    setFilter(value);
  };
  return (
    <Container title="Phonebook">
      <Container>
        <Form />
      </Container>
      {contacts.length > 0 && (
        <Container title="Contacts">
          <Filter onFilterChange={onFilterChange} />
          <ContactList filter={filter} />
        </Container>
      )}
      <Toaster />
    </Container>
  );
};
