const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NAME_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default reducer;
