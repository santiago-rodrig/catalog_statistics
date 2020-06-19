const filterCompanies = (companies, exchangeFilter, minimumFilter, maximumFilter) => {
  const exchangeFilterRegexp = RegExp(`.*${exchangeFilter}.*`, 'i');
  const isNumber = str => RegExp('^\\d+(\\.\\d+)?$').test(str);
  return (
    companies.filter(c => exchangeFilterRegexp.test(c.exchange))
      .filter(c => !minimumFilter || (isNumber(minimumFilter) && c.price >= Number(minimumFilter)))
      .filter(c => !maximumFilter || (isNumber(maximumFilter) && c.price <= Number(maximumFilter)))
  );
};

export default filterCompanies;
