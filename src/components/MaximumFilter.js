import React from 'react';
import PropTypes from 'prop-types';

const Component = ({ handleChange }) => (
  <div className="field">
    <label htmlFor="maximum">
      <span>Maximum price:</span>
      <input onChange={handleChange} type="text" placeholder="258.31" name="maximum" />
    </label>
  </div>
);

Component.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Component;
