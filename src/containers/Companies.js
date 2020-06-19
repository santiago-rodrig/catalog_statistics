import React, { useRef, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateCompanies from '../actions';
import CompaniesList from '../components/CompaniesList';
import loadingGif from '../images/loading.gif';
import styles from './Companies.module.css';

const APIToken = '?token=Tpk_ef813a81a4e24d0885a504b77399cabc';
const APIURL = 'https://sandbox.iexapis.com/stable';
const GETOptions = {
  method: 'GET',
  mode: 'cors',
  headers: { 'Content-Type': 'application/json' },
};

const mapStateToProps = state => ({
  companies: state,
});

const mapDispatchToProps = dispatch => ({
  updateCompanies: companies => dispatch(updateCompanies(companies)),
});

const Component = ({ companies, updateCompanies }) => {
  const inputRef = useRef();
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    updateCompanies([]);
  }, [updateCompanies]);

  useEffect(() => {
    if (fetching) {
      const fragment = inputRef.current.value.toLowerCase();
      (async () => {
        const response = await window.fetch(
          `${APIURL}/search/${fragment}${APIToken}`,
          GETOptions,
        );
        const data = await response.json();
        const exchangeAndSymbol = data.map(c => ({ symbol: c.symbol, exchange: c.exchange }));
        const result = [];
        await new Promise(resolve => {
          const offset = 300;
          exchangeAndSymbol.forEach((c, i) => {
            window.setTimeout(() => {
              window.fetch(
                `${APIURL}/stock/${c.symbol.toLowerCase()}/quote${APIToken}`,
                GETOptions,
              )
                .then(response => response.json())
                .then(data => {
                  result.push({
                    price: data.latestPrice,
                    name: data.companyName,
                    exchange: c.exchange,
                    symbol: c.symbol,
                  });
                  if (result.length === exchangeAndSymbol.length) resolve();
                });
            }, offset * (i + 1));
          });
        });
        updateCompanies(result);
        setFetching(false);
      })();
    }
  }, [fetching, setFetching, updateCompanies]);

  const handleSubmit = e => {
    e.preventDefault();
    setFetching(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <label htmlFor="symbol">
          Symbol
          <input ref={inputRef} name="symbol" type="text" placeholder="aapl" />
        </label>
        <button type="submit">
          <i className="fas fa-search" />
        </button>
      </form>
      {
        fetching
          ? <img className={styles.loading} src={loadingGif} alt="loading gif" />
          : <CompaniesList companies={companies} />
      }
    </div>
  );
};

Component.propTypes = {
  companies: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCompanies: PropTypes.func.isRequired,
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
