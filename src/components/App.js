// src/components/App.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addCompanies from '../actions';

const mapDispatchToProps = dispatch => ({
  addCompanies: companies => dispatch(addCompanies(companies)),
});

const mapStateToProps = state => ({
  companies: state,
});

const Component = ({ companies, addCompanies }) => {
  useEffect(() => {
    fetch('https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=dcc4a7c2f57cf7b1f8804163eca5017b', { headers: { 'Content-Type': 'application/json' } })
      .then(
        r => r.json(),
        () => {
          throw new Error('ERROR');
        },
      ).catch(e => {
        addCompanies([e.message]);
      });
  }, [companies, addCompanies]);

  return <div>{companies.length !== 0 ? JSON.stringify(companies) : 'Loading...'}</div>;
};

Component.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  addCompanies: PropTypes.func.isRequired,
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
