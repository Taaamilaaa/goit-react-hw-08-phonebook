import ContactItem from '../ContactItem/ContactItem';
import styles from './contactList.module.css';
import PropTypes from 'prop-types';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useSelector } from 'react-redux';
const ContactList = ({ filter }) => {
  const contacts = useSelector(state => state.contacts.cont);
  const getVisibleContacts = (contactsArr, filter) => {
    if (contactsArr.length > 0) {
      return contactsArr.filter(cont => {
        return cont.name.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return;
  };
  const visibleContacts = getVisibleContacts(contacts, filter);
  return (
    <ul className={styles.list}>
      <SimpleBar style={{ maxHeight: 300, forceVisible: true | 'x' | 'y' }}>
        {contacts.length > 0 ? (
          visibleContacts.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.number}
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
  filter: PropTypes.string,
  
};

export default ContactList;
