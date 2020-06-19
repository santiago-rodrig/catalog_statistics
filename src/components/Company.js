import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import styles from './Company.module.css';
import loadingGif from '../images/loading.gif';

const APIToken = '?token=Tpk_ef813a81a4e24d0885a504b77399cabc';
const APIURL = 'https://sandbox.iexapis.com/stable';
const GETOptions = {
  method: 'GET',
  mode: 'cors',
  headers: { 'Content-Type': 'application/json' },
};

const Loading = () => (
  <div className={styles.loading}>
    <h1>Fetching data...</h1>
    <img src={loadingGif} alt="loading gif" />
  </div>
);

const Details = ({ companyDetails }) => (
  <div style={{ marginTop: '4rem' }}>
    <section className={styles.details_section}>
      <h2>What this company dedicates to?</h2>
      <p>
        It works in the
        {' '}
        <strong>
          {`${companyDetails.industry} `}
          industry
        </strong>
        , specifically in the
        {' '}
        <strong>
          {`${companyDetails.sector} `}
          sector
        </strong>
        .
      </p>
    </section>
    <section className={styles.details_section}>
      <h2>Website</h2>
      <p>
        {
          companyDetails.webiste
            ? `You can visit the company's website at ${<a href={companyDetails.website}>{companyDetails.website}</a>}.`
            : 'This company has no website.'
        }
      </p>
    </section>
    <section className={styles.details_section}>
      <h2>What else is there to know about this company?</h2>
      <p>
        <strong>
          Its CEO is
          {' '}
          {companyDetails.CEO}
          {
            companyDetails.employees
              ? `, and it employs ${companyDetails.employees} people`
              : ''
          }
        </strong>
        .
      </p>
      <p>
        {companyDetails.description}
        .
      </p>
      <p>
        The company is
        {' '}
        <strong>
          based at
          {` ${companyDetails.country}`}
          ,
          {` ${companyDetails.state}`}
          ,
          {` ${companyDetails.city}`}
          ,
          {` ${companyDetails.address}`}
          , ZIP code
          {` ${companyDetails.zip}`}
          , phone
          {` ${companyDetails.phone}`}
        </strong>
        .
      </p>
    </section>
  </div>
);

Details.propTypes = {
  companyDetails: PropTypes.exact({
    companyName: PropTypes.string,
    exchange: PropTypes.string,
    description: PropTypes.string,
    website: PropTypes.string,
    CEO: PropTypes.string,
    industry: PropTypes.string,
    sector: PropTypes.string,
    employees: PropTypes.number,
    address: PropTypes.string,
    state: PropTypes.string,
    city: PropTypes.string,
    zip: PropTypes.string,
    country: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
};

const Component = () => {
  const [fetching, setFetching] = useState(true);
  const [companyDetails, setCompanyDetails] = useState(null);
  const [price, setPrice] = useState(null);
  const { symbol } = useParams();

  useEffect(() => {
    window.fetch(
      `${APIURL}/stock/${symbol}/company${APIToken}`,
      GETOptions,
    )
      .then(response => response.json())
      .then(data => {
        const {
          description,
          website,
          industry,
          CEO,
          sector,
          employees,
          address,
          state,
          city,
          zip,
          country,
          phone,
          exchange,
          companyName,
        } = data;
        setCompanyDetails({
          exchange,
          description,
          website,
          CEO,
          industry,
          sector,
          employees,
          address,
          state,
          city,
          zip,
          country,
          phone,
          companyName,
        });
      })
      .then(() => (new Promise(resolve => {
        window.setTimeout(() => {
          resolve(window.fetch(`${APIURL}/stock/${symbol}/price${APIToken}`, GETOptions));
        }, 500);
      })))
      .then(response => response.json())
      .then(data => {
        setPrice(data);
        setFetching(false);
      });
  }, [setPrice, setCompanyDetails, setFetching, symbol]);

  let renderedJSX = null;

  if (fetching) {
    renderedJSX = <Loading />;
  } else {
    renderedJSX = (
      <div className="container">
        <main
          style={{
            textAlign: 'center',
            marginTop: '6rem',
            width: '80%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <h1>
            {`${companyDetails.companyName} (${symbol.toUpperCase()})`}
          </h1>
          <p className={styles.lead}>
            <span className={styles.price}>{`$ ${price}`}</span>
            {' '}
            <span className={styles.exchange}>
              (
              {companyDetails.exchange}
              )
            </span>
          </p>
        </main>
        <hr style={{ width: '80%' }} />
        <Details companyDetails={companyDetails} />
      </div>
    );
  }

  return renderedJSX;
};

export default Component;
