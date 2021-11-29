import ContactItem from '../ContactItem/ContactItem';
import styles from './contactList.module.css';
import PropTypes from 'prop-types';
import { useFetchContactsQuery } from 'redux/contacts/contactsSlice';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const ContactList = ({ filter }) => {
  const { data: contacts } = useFetchContactsQuery();

  const getVisibleContacts = (contactsArr, filter) => {
    if (contactsArr) {
      return contactsArr.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
    }
    return;
  };
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={styles.list}>
      <SimpleBar style={{ maxHeight: 300, forceVisible: true | 'x' | 'y' }}>
        {contacts ? (
          visibleContacts.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
            />
          ))
        ) : (
          <p>No matches</p>
        )}
      </SimpleBar>
    </ul>
  );
};

ContactList.prototype = {
  contacts: PropTypes.obj,
  clickOnBtn: PropTypes.func,
};

export default ContactList;
