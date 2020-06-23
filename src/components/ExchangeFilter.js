import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExchangeFilter.module.css';

const Component = ({ handleChange }) => (
  <div className="field">
    <label htmlFor="exchange">
      <span>Exchange:</span>
      <input className={styles.exchange_input} onChange={handleChange} type="text" placeholder="NASDAQ" name="exchange" />
    </label>
  </div>
);

Component.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Component;
