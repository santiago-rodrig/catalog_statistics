const filterCompanies = (companies, exchangeFilter) => {
  const exchangeFilterRegexp = RegExp(`.*${exchangeFilter}.*`, 'i');
  return companies.filter(c => exchangeFilterRegexp.test(c.exchange));
};

export default filterCompanies;
