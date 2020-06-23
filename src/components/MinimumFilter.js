import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ handleChange }) => (
  <div className="field">
    <label htmlFor="minimum">
      <span>Minimum price:</span>
      <input onChange={handleChange} type="text" placeholder="138.25" name="minimum" />
    </label>
  </div>
);

Component.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Component;
