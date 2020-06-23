import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMinimumFilter } from '../actions';
import MinimumFilter from '../components/MinimumFilter';

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setMinimumFilter(filter)),
});

const Component = ({ setFilter }) => {
  const handleChange = e => {
    const filter = e.target.value;
    setFilter(filter);
  };

  return <MinimumFilter handleChange={handleChange} />;
};

Component.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

const Container = connect(null, mapDispatchToProps)(Component);

export default Container;
