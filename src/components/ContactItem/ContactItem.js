import React from 'react';
import styles from './contactItem.module.css';
import PropTypes from 'prop-types';
import { notifyDel } from 'toaster/toaster';
import { useDeleteContactMutation } from 'redux/contacts/contactsSlice';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const del = () => {
    deleteContact(id);
    notifyDel(`Contact with the name ${name} deleted!!!`);
  };
  return (
    <li className={styles.contactItem}>
      <div className={styles.content}>
        <span className={styles.name}>{name}:</span>
        <span className={styles.number}>{phone}</span>
      </div>

      <button
        className={styles.btn}
        disabled={isDeleting}
        onClick={() => del(id)}
      >
        {isDeleting ? (
          <Loader type="Puff" color="red" height={20} width={20} />
        ) : (
          '❌'
        )}
      </button>
    </li>
  );
};

ContactItem.propType = {
  contacts: PropTypes.obj,
  clickOnBtn: PropTypes.func,
};
export default ContactItem;
