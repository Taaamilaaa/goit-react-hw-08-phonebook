import styles from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ onFilterChange }) => {
  const onChange = e => {
    onFilterChange(e.currentTarget.value);
  };
  return (
    <>
      <label className={styles.label}>Find contacts by name</label>
      <input className={styles.input} onChange={onChange} />
    </>
  );
};
Filter.propType = {
  onFilterChange: PropTypes.func,
};

export default Filter;
