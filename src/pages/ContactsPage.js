import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container } from 'components/Container/Container';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';


export const ContactsPage = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);
  const [filter, setFilter] = useState('');

  const onFilterChange = value => {
    setFilter(value);
  };
 
    return ( <Container title="Phonebook">
          <Container>
            <Form />
          </Container>

          {contacts.length > 0 && (
            <Container title="Contacts">
              <Filter onFilterChange={onFilterChange} />
              <ContactList filter={filter} />
            </Container>
          )}
          {/* {isFetching && (
            <Loader
              type="Watch"
              className="loader"
              color="rgba(114, 27, 27, 0.787)"
              height={200}
              width={200}
            />
          )} */}

          <Toaster />
        </Container>
    )
}