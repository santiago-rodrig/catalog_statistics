// src/reducers/index.js
const FETCH_COMPANIES = 'FETCH_COMPANIES';
const reducer = (state={}, action) => {
  switch (action.type) {
    case FETCH_COMPANIES:
      return action.companies
    default:
      return state
  }
};
export default reducer;
