// src/actions/index.js

const addCompanies = companies => ({ type: 'ADD_COMPANIES', companies });
const setExchangeFilter = filter => ({ type: 'SET_EXCHANGE_FILTER', filter });

export { addCompanies, setExchangeFilter };
