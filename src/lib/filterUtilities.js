const filterCompanies = (companies, exchangeFilter, minimumFilter) => {
  const exchangeFilterRegexp = RegExp(`.*${exchangeFilter}.*`, 'i');
  const isNumber = str => RegExp('^\\d+$').test(str);
  return (
    companies.filter(c => exchangeFilterRegexp.test(c.exchange))
      .filter(c => !minimumFilter || (isNumber(minimumFilter) && c.price > Number(minimumFilter)))
  );
};

export default filterCompanies;
