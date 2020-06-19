// src/actions/index.js

const addCompanies = companies => {
  window.localStorage.setItem('companies', JSON.stringify(companies));
  return { type: 'ADD_COMPANIES', companies };
};

export default addCompanies;
