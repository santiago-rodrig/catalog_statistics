// src/reducers/index.js
import { combineReducers } from 'redux';
import companiesReducer from './companies';
import exchangeFilterReducer from './exchangeFilter';
import minimumFilterReducer from './minimumFilter';
import maximumFilterReducer from './maximumFilter';

const reducer = combineReducers({
  companies: companiesReducer,
  exchangeFilter: exchangeFilterReducer,
  minimumFilter: minimumFilterReducer,
  maximumFilter: maximumFilterReducer,
});

export default reducer;
