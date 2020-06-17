// src/reducers/index.js

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMPANIES':
      return action.companies;
    default:
      return state;
  }
};

export default reducer;
