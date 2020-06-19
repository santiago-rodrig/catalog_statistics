// src/actions/index.js

const addCompanies = companies => ({ type: 'ADD_COMPANIES', companies });
const setExchangeFilter = filter => ({ type: 'SET_EXCHANGE_FILTER', filter });
const setMinimumFilter = filter => ({ type: 'SET_MINIMUM_FILTER', filter });
const setMaximumFilter = filter => ({ type: 'SET_MAXIMUM_FILTER', filter });
const setNameFilter = filter => ({ type: 'SET_NAME_FILTER', filter });

export {
  addCompanies,
  setExchangeFilter,
  setMinimumFilter,
  setMaximumFilter,
  setNameFilter,
};
