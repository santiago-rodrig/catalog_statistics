import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMaximumFilter } from '../actions';
import MaximumFilter from '../components/MaximumFilter';

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setMaximumFilter(filter)),
});

const Component = ({ setFilter }) => {
  const handleChange = e => {
    const filter = e.target.value;
    setFilter(filter);
  };

  return <MaximumFilter handleChange={handleChange} />;
};

Component.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

const Container = connect(null, mapDispatchToProps)(Component);

export default Container;
