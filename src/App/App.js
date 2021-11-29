import './App.css';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container } from 'components/Container/Container';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const App = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [filter, setFilter] = useState('');

  const onFilterChange = value => {
    setFilter(value);
  };
  console.log(contacts);
  return (
    <div className="container">
      <Container title="Phonebook">
        <Container>
          <Form />
        </Container>

        {contacts && (
          <Container title="Contacts">
            <Filter onFilterChange={onFilterChange} />
            <ContactList filter={filter} />
          </Container>
        )}
        {isFetching && (
          <Loader
            type="Watch"
            className="loader"
            color="rgba(114, 27, 27, 0.787)"
            height={200}
            width={200}
          />
        )}

        <Toaster />
      </Container>
    </div>
  );
};

export default App;
