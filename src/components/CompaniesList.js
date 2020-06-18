import React from 'react';
import PropTypes from 'prop-types';
import CompanyItem from './CompanyItem';
import styles from './CompaniesList.module.css';

const Component = ({ companies }) => (
  <ul className={styles.list}>{companies.map(c => <CompanyItem key={c.symbol} company={c} />)}</ul>
);

Component.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Component;
