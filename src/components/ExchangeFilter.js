import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ handleChange }) => (
  <div className="field">
    <label htmlFor="exchange">
      Exchange:
      <input onChange={handleChange} type="text" placeholder="NASDAQ" name="exchange" />
    </label>
  </div>
);

Component.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Component;
