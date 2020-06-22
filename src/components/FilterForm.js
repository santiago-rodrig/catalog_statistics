import React from 'react';
import ExchangeFilter from '../containers/ExchangeFilter';
import MinimumFilter from '../containers/MinimumFilter';
import MaximumFilter from '../containers/MaximumFilter';
import NameFilter from '../containers/NameFilter';
import styles from './FilterForm.module.css';

const Component = () => (
  <>
    <h2
      style={{
        textAlign: 'center', maxWidth: '80%', margin: '0 auto', marginTop: '2rem',
      }}
    >
      Filter your data!
      <span style={{ fontSize: '80%', color: 'rgba(200, 200, 200, 0.7)' }}>
        {' (if you want to)'}
      </span>
    </h2>
    <form onSubmit={e => e.preventDefault()} className={`panel ${styles.filter_form}`}>
      <NameFilter />
      <ExchangeFilter />
      <MinimumFilter />
      <MaximumFilter />
    </form>
  </>
);

export default Component;
