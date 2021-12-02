import ContactItem from '../ContactItem/ContactItem';
import styles from './contactList.module.css';
import PropTypes from 'prop-types';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { useSelector } from 'react-redux';

const ContactList = ({ filter }) => {
  const contacts = useSelector(state => state.contacts.contacts);

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
