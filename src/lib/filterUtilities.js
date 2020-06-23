const filterCompanies = (companies, exchangeFilter, minimumFilter, maximumFilter, nameFilter) => {
  const matchesFilter = (filter, field) => RegExp(`.*${filter}.*`, 'i').test(field);
  const isNumber = str => RegExp('^\\d+(\\.\\d+)?$').test(str);
  return (
    companies
      .filter(c => matchesFilter(exchangeFilter, c.exchange))
      .filter(c => !minimumFilter || (isNumber(minimumFilter) && c.price >= Number(minimumFilter)))
      .filter(c => !maximumFilter || (isNumber(maximumFilter) && c.price <= Number(maximumFilter)))
      .filter(c => matchesFilter(nameFilter, c.name))
  );
};

export default filterCompanies;
