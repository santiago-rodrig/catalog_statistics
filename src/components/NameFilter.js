import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ handleChange }) => (
  <div className="field">
    <label htmlFor="company_name">
      <span>Name:</span>
      <input onChange={handleChange} type="text" placeholder="Apple" name="company_name" />
    </label>
  </div>
);

Component.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Component;
