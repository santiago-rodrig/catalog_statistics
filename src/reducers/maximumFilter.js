const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_MAXIMUM_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default reducer;
