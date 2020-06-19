// src/reducers/index.js

const initialState = JSON.parse(window.localStorage.getItem('companies')) || [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COMPANIES':
      return action.companies;
    default:
      return state;
  }
};

export default reducer;
