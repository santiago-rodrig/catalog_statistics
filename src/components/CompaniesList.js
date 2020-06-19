import React from 'react';
import PropTypes from 'prop-types';
import CompanyItem from './CompanyItem';
import styles from './CompaniesList.module.css';

const Component = ({ companies }) => {
  return (
    <>
      <h2
        style={{
          maxWidth: '80%', textAlign: 'center', margin: '0 auto', marginTop: '3rem',
        }}
      >
        { companies.length === 0 ? 'Search something' : 'Search results' }
      </h2>
      <ul className={styles.list}>
        {companies.map(c => <CompanyItem key={c.symbol} company={c} />)}
      </ul>
    </>
  );
};

Component.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Component;
