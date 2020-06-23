const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_MINIMUM_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default reducer;
