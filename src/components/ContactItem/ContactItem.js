import React from 'react';
import styles from './contactItem.module.css';
import PropTypes from 'prop-types';
import { notifyDel } from 'toaster/toaster';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { deleteContactThunk } from 'redux_/contacts/contacts-thunks';
import { useDispatch, useSelector } from 'react-redux';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  const del = () => {
    dispatch(deleteContactThunk(id));
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
        disabled={isLoading}
        onClick={() => del(id)}
      >       
          ❌        
      </button>
    </li>
  );
};

ContactItem.propType = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};
export default ContactItem;
