import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setNameFilter } from '../actions';
import NameFilter from '../components/NameFilter';

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setNameFilter(filter)),
});

const Component = ({ setFilter }) => {
  const handleChange = e => {
    const filter = e.target.value;
    setFilter(filter);
  };

  return <NameFilter handleChange={handleChange} />;
};

Component.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

const Container = connect(null, mapDispatchToProps)(Component);

export default Container;
