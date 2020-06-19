// src/reducers/index.js
import { combineReducers } from 'redux';
import companiesReducer from './companies';
import exchangeFilterReducer from './exchangeFilter';

const reducer = combineReducers({
  companies: companiesReducer,
  exchangeFilter: exchangeFilterReducer,
});

export default reducer;
