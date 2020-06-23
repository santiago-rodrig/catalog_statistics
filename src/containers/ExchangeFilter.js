import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setExchangeFilter } from '../actions';
import ExchangeFilter from '../components/ExchangeFilter';

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setExchangeFilter(filter)),
});

const Component = ({ setFilter }) => {
  const handleChange = e => {
    const filter = e.target.value;
    setFilter(filter);
  };

  return <ExchangeFilter handleChange={handleChange} />;
};

Component.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

const Container = connect(null, mapDispatchToProps)(Component);

export default Container;
