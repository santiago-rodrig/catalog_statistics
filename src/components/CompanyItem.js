import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './CompanyItem.module.css';

const Component = ({ company }) => (
  <li className={`panel ${styles.item}`}>
    <h3>
      {company.name}
      {` (${company.symbol})`}
    </h3>
    <p className={styles.price}>{`$ ${company.price}`}</p>
    <p>
      {`${company.exchange} `}
      exchange
    </p>
    <p><Link to={`/${company.symbol.toLowerCase()}`}>Details</Link></p>
  </li>
);

Component.propTypes = {
  company: PropTypes.exact({
    name: PropTypes.string,
    price: PropTypes.number,
    exchange: PropTypes.string,
    symbol: PropTypes.string,
  }).isRequired,
};

export default Component;
