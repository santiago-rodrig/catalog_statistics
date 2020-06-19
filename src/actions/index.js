// src/actions/index.js

const addCompanies = companies => ({ type: 'ADD_COMPANIES', companies });
const setExchangeFilter = filter => ({ type: 'SET_EXCHANGE_FILTER', filter });
const setMinimumFilter = filter => ({ type: 'SET_MINIMUM_FILTER', filter });

export { addCompanies, setExchangeFilter, setMinimumFilter };
