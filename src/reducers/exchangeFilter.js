const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_EXCHANGE_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default reducer;
