import React from 'react';
import PropTypes from 'prop-types';
import CompanyItem from './CompanyItem';
import styles from './CompaniesList.module.css';
import filterCompanies from '../lib/filterUtilities';

const Component = ({
  companies, exchangeFilter, minimumFilter, maximumFilter,
}) => {
  const filteredCompanies = filterCompanies(
    companies,
    exchangeFilter,
    minimumFilter,
    maximumFilter,
  );
  return (
    <>
      <h2
        style={{
          maxWidth: '80%', textAlign: 'center', margin: '0 auto', marginTop: '3rem',
        }}
      >
        { filteredCompanies.length === 0 ? 'Nothing to show' : 'Search results' }
      </h2>
      <ul className={styles.list}>
        {filteredCompanies.map(c => <CompanyItem key={c.symbol} company={c} />)}
      </ul>
    </>
  );
};

Component.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  exchangeFilter: PropTypes.string.isRequired,
  minimumFilter: PropTypes.string.isRequired,
  maximumFilter: PropTypes.string.isRequired,
};

export default Component;
